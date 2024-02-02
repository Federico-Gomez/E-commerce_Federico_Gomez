import classes from "./ItemDetailContainer.module.css"
import { useState, useEffect } from "react"
// import { getProductById } from "../../asyncMock"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useNotification } from "../../notification/NotificationService"
import { getProductById } from "../../services/firebase/firestore/products"
import { useAsync } from "../../hooks/useAsync"

const ItemDetailContainer = () => {

    const { productId } = useParams()

    const { showNotification } = useNotification()

    useEffect(() => {
        if (product) document.title = product.name

        return () => {
            document.title = "BT Games"
        }
    })

    const asyncFunction = () => getProductById(productId)

    const { data: product, error, loading } = useAsync(asyncFunction, [productId])

    // useEffect(() => {
    //     setLoading(true)

    //     getProductById(productId)
    //         .then(product => {
    //             setProduct(product)
    //         })
    //         .catch(error => {showNotification('error', "Error loading product")})
    //         .finally(() => {
    //             setLoading(false)
    //         })

    //     // getProductById(productId)
    //     //     .then(response => {
    //     //         setProduct(response)
    //     //     })
    //     //     .catch(error => {showNotification('error', "Error loading products")})
    //     //     .finally(() => {
    //     //         setLoading(false)
    //     //     })

    // }, [productId])

    if (!product) {
        return <h1 className={`${classes.error}`}>404 Not available</h1>
    }

    if (loading) {
        return <h1 className={`${classes.loading}`}>Loading product...</h1>
    }

    if (error) {
        showNotification('error', "Error loading products")
    }

    return (
        <div>
            <h3 className={`${classes.h3}`}>Product Detail</h3>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer