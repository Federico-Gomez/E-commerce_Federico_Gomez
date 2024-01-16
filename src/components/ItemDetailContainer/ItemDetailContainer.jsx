import classes from "./ItemDetailContainer.module.css"
import { useState, useEffect } from "react"
import { getProductById } from "../../asyncMock"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(true)

    const [product, setProduct] = useState({})

    const { productId } = useParams()

    useEffect(() => {
        setLoading(true)
        getProductById(productId)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {console.log(error)})
            .finally(() => {
                setLoading(false)
            })
    }, [productId])

    if(!product) {
        return <h1 className={`${classes.error}`}>Error 404</h1>
    }

    if (loading) {
        return <h1 className={`${classes.loading}`}>Loading product...</h1>
    }



    return (
        <div>
            <h3 className={`${classes.h3}`}>Product Detail</h3>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer