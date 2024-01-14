import classes from "./ItemListContainer.module.css"
import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {

        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId)
            .then(response => {
                setProducts(response)
            })
    }, [categoryId])


    return (
        <div>
            <h3 className={`${classes.h3}`}>{greeting}</h3>
            <div className={`${classes.container}`}>
                <ItemList products={products} />
            </div>

        </div>
    )
}

export default ItemListContainer