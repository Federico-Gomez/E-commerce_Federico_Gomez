import { useCart } from "../../context/CartContext"
import { getDocs, collection, where, query, documentId, writeBatch, addDoc } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"
import styles from './Checkout.module.css'
import CheckoutForm from "../CheckoutForm/CheckoutForm"
import { useNotification } from "../../notification/NotificationService"
import { useState } from "react"
import OrderDetail from "../OrderDetail/OrderDetail"

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState(null)
    const { cart, total, clearCart } = useCart()

    const { showNotification } = useNotification()

    const createOrder = async (userData) => {
        setLoading(true)
        try {
            const objOrder = {
                buyer: userData,
                items: cart,
                total
            }

            const ids = cart.map(prod => prod.id)

            const productsCollection = query(collection(db, 'products'), where(documentId(), 'in', ids))

            const batch = writeBatch(db)
            const outOfStock = []

            const querySnapshot = await getDocs(productsCollection)

            console.log(querySnapshot)
            console.log(userData)

            const { docs } = querySnapshot

            docs.forEach(doc => {
                const fields = doc.data()
                const stockDb = fields.stock

                const productsAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productsAddedToCart.quantity

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...fields })
                }
            })

            if (outOfStock.length === 0) {
                batch.commit()
                
                const orderCollection = collection(db, 'orders')
                const { id } = await addDoc(orderCollection, objOrder)
                setOrderId(id)
                clearCart()

            } else {
                showNotification('error', "There are products out of stock")
            }

        } catch (error) { 
            showNotification('error', "There was an error processing your order")
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return <h3 className={styles.h3}>Processing your order, please wait...</h3>
    }
    if (orderId) {
        return <h3 className={styles.h3}>Your order has the following id: {orderId}</h3>
    }

    return (
        <div className={styles.container}>
            <div className={styles.form}>
                <CheckoutForm onCreate={createOrder} />
            </div>
            <div className={styles.order_container}>
                <h1 className={styles.h1}>Order detail</h1>
                <OrderDetail />
            </div>
        </div>
    )
}

export default Checkout