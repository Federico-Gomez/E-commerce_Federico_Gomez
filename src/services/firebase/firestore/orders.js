import { db } from "../firebaseConfig"
import { getDocs, collection, where, query, documentId, writeBatch, addDoc } from "firebase/firestore"
import { useNotification } from "../../../notification/NotificationService"
import { useCart } from "../../../context/CartContext"
import { useState } from "react"

export const useOrders = () => {

    const { cart, total, clearCart } = useCart()
    const { showNotification } = useNotification()
    const [orderId, setOrderId] = useState(null)
    const [loading, setLoading] = useState(false)

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
                console.log(orderId)
                clearCart()

            } else {
                showNotification('error', "There are products out of stock")
            }

        } catch (error) {
            return error
        } finally {
            setLoading(false)
        }
    }

    return {
        createOrder
    }
}