import classes from "./ItemDetailContainer.module.css"
import { useState, useEffect } from "react"
// import { getProductById } from "../../asyncMock"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useNotification } from "../../notification/NotificationService"
import { db } from "../../services/firebase/firebaseConfig"
import { getDoc, doc } from "firebase/firestore"

const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(true)

    const [product, setProduct] = useState({})

    const { productId } = useParams()

    const { showNotification } = useNotification()

    useEffect(() => {
        setLoading(true)

        const productDocument = doc(db, 'products', productId)

        getDoc(productDocument)
            .then(queryDocumentSnapshot => {
                const fields = queryDocumentSnapshot.data()
                const productAdapted = {id: queryDocumentSnapshot.id, ...fields}
                setProduct(productAdapted)
            })
            .catch(error => {showNotification('error', "Error loading product")})
            .finally(() => {
                setLoading(false)
            })

        // getProductById(productId)
        //     .then(response => {
        //         setProduct(response)
        //     })
        //     .catch(error => {showNotification('error', "Error loading products")})
        //     .finally(() => {
        //         setLoading(false)
        //     })

    }, [productId])

    if (!product) {
        return <h1 className={`${classes.error}`}>404 Not available</h1>
    }

    if (loading) {
        return <h1 className={`${classes.loading}`}>Loading product...</h1>
    }

    return (
        <div>
            <h3 className={`${classes.h3}`}>Product Detail</h3>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer