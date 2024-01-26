import classes from './CartItem.module.css'
import { useCart } from '../../context/CartContext'

const CartItem = ({ id, name, img, quantity, price}) => {

    const { removeItem } = useCart()

    return (
        <div className={`${classes.item}`}>
            <h1 className={`${classes.name}`}>{name}</h1>
            <img className={`${classes.img}`} src={img} alt="product image" />
            <p className={`${classes.category}`}>Quantity: {quantity}</p>
            <p className={`${classes.price}`}>Price: ${price}</p>
            <h5 className={`${classes.price}`}>Subtotal: ${price*quantity}</h5>
            <button className={`${classes.rmv_btn}`} onClick={() => removeItem(id)}>Remove</button>
        </div>
    )
}

export default CartItem