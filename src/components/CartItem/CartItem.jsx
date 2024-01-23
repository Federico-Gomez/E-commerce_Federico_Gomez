import classes from './CartItem.module.css'
import { useCart } from '../../context/CartContext'

const CartItem = ({ id, name, img, quantity, price}) => {
    const { removeItem } = useCart()
    return (
        <div>
            <h1 className={`${classes.name}`}>{name}</h1>
            <img className={`${classes.img}`} src={img} alt="product image" />
            <p className={`${classes.category}`}>Quantity: {quantity}</p>
            <h5 className={`${classes.price}`}>${price*quantity}</h5>
            <button onClick={() => removeItem(id)}>Remove</button>
        </div>
    )
}

export default CartItem