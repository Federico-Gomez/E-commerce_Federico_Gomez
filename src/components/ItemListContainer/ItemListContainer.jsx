import classes from "./ItemListContainer.module.css"
import { useState, useEffect } from "react"
import { getProducts } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
            .then(response => {
                setProducts(response)
            })
    }, [])


    return (
        <div>
            <h3 className={`${classes.h3}`}>{greeting}</h3>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer