import classes from "./ItemListContainer.module.css"
import { useState, useEffect } from "react"
//import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { useNotification } from "../../notification/NotificationService"
import { db } from "../../services/firebase/firebaseConfig"
import { getDocs, collection, query, where } from "firebase/firestore"

const ItemListContainer = ({ greeting }) => {

    const [loading, setLoading] = useState(true)

    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    const { showNotification } = useNotification()

    useEffect(() => {
        setLoading(true)

        const productsCollection = categoryId 
        ? query(collection(db, 'products'), where('category', '==', categoryId))
        : collection(db, 'products')

        getDocs(productsCollection)
            .then(querySnapshot => {
                const productsAdapted = querySnapshot.docs.map(doc => {
                    const fields = doc.data()
                    return { id: doc.id, ...fields}
                })
                setProducts(productsAdapted)
            })
            .catch(error => {showNotification('error', "Error loading products")})
            .finally(() => {
                setLoading(false)
            })

        // const asyncFunction = categoryId ? getProductsByCategory : getProducts

        // asyncFunction(categoryId)
        //     .then(response => {
        //         setProducts(response)
        //     })
        //     .catch(error => {showNotification('error', "Error loading products")})
        //     .finally(() => {
        //         setLoading(false)
        //     })

    }, [categoryId])

    if (loading) {
        return <h1 className={`${classes.loading}`}>Loading products...</h1>
    }

    return (
        <div className={`${classes.container}`}>
            <h3 className={`${classes.h3}`}>{greeting + (categoryId ?? '')}</h3>
            <div className={`${classes.itemContainer}`}>
                <ItemList products={products} />
            </div>

        </div>
    )
}

export default ItemListContainer