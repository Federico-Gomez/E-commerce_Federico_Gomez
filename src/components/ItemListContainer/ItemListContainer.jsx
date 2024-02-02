import classes from "./ItemListContainer.module.css"
import { useState, useEffect } from "react"
//import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { useNotification } from "../../notification/NotificationService"
import { getProducts } from "../../services/firebase/firestore/products"
import { useAsync } from "../../hooks/useAsync"

const ItemListContainer = ({ greeting }) => {

    const { categoryId } = useParams()
    const { showNotification } = useNotification()

    useEffect(() => {
        if (categoryId) document.title = "BT Games: " + categoryId

        return () => {
            document.title = "BT Games"
        }
    }, [categoryId])

    const asyncFunction = () => getProducts(categoryId)

    const { data: products, error, loading } = useAsync(asyncFunction, [categoryId])


    // useEffect(() => {
    //     setLoading(true)

    //     getProducts(categoryId)
    //         .then(products => {
    //             setProducts(products)
    //         })
    //         .catch(error => {showNotification('error', "Error loading products")})
    //         .finally(() => {
    //             setLoading(false)
    //         })


    //     // const asyncFunction = categoryId ? getProductsByCategory : getProducts

    //     // asyncFunction(categoryId)
    //     //     .then(response => {
    //     //         setProducts(response)
    //     //     })
    //     //     .catch(error => {showNotification('error', "Error loading products")})
    //     //     .finally(() => {
    //     //         setLoading(false)
    //     //     })

    // }, [categoryId])

    if (loading) {
        return <h1 className={`${classes.loading}`}>Loading products...</h1>
    }

    if (error) {
        showNotification('error', "Error loading products")
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