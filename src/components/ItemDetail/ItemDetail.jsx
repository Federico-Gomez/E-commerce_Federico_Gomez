import { useState } from "react"
import classes from "./ItemDetail.module.css"
import ItemCount from '../ItemCount/ItemCount'
import { useCart } from "../../context/CartContext"
import { useNotification } from "../../notification/NotificationService"

const ItemDetail = ({ id, name, category, img, price, description, stock }) => {
    const [quantity, setQuantity] = useState({})

    const { addItem } = useCart()

    const { showNotification } = useNotification()

    const handleOnAdd = (quantity) => {
        const objProductToAdd = {
            id, name, quantity, price, img
        }

        addItem(objProductToAdd)
        showNotification('success', `${quantity} Items added to Cart`)
        setQuantity(quantity)
    }

    return (

        <article className={`${classes.articleContainer}`}>
            <h1 className={`${classes.name}`}>{name}</h1>
            <div className={`${classes.itemContainer}`}>
                <div>
                    <img className={`${classes.img}`} src={img} alt="product image" />
                </div>
                <div>
                    <div className={`${classes.description}`}>
                        <p>Description:</p>
                        <p > {description}</p>
                    </div>
                    <p className={`${classes.category}`}>Category: {category}</p>
                    <h5 className={`${classes.price}`}>Price: ${price}</h5>
                    <ItemCount stock={stock} onAdd={handleOnAdd} />
                </div>
            </div>

        </article>
    )
}

export default ItemDetail