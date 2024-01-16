import classes from "./ItemListContainer.module.css"
import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = ({ greeting }) => {

    const [loading, setLoading] = useState(true)

    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {console.log(error)})
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])

    if (loading) {
        return <h1 className={`${classes.loading}`}>Loading products...</h1>
    }

    return (
        <div className={`${classes.container}`}>
            <h3 className={`${classes.h3}`}>{greeting}</h3>
            <div className={`${classes.itemContainer}`}>
                <ItemList products={products} />
            </div>

        </div>
    )
}

export default ItemListContainer