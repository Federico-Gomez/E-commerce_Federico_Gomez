import classes from "./ItemDetailContainer.module.css"
import { useState, useEffect } from "react"
import { getProductById } from "../../asyncMock"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})

    const { productId } = useParams()

    useEffect(() => {
        getProductById(productId)
            .then(response => {
                setProduct(response)
            })
    }, [productId])

    if(!product) {
        return <h1>El producto no existe</h1>
    }


    return (
        <div>
            <h1>Detalle</h1>
            <h1>{product?.name}</h1>
        </div>
    )
}

export default ItemDetailContainer