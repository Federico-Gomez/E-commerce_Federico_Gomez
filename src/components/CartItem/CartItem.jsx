import classes from './CartItem.module.css'
import { useCart } from '../../context/CartContext'

const CartItem = ({ id, name, img, quantity, price }) => {

    const { removeItem } = useCart()

    return (
        <div className={`${classes.container}`}>
            <div className={`${classes.container_box}`}>
                <div className={`${classes.item}`}>
                    <h1 className={`${classes.name}`}>{name}</h1>
                    <img className={`${classes.img}`} src={img} alt="product image" />
                    <p className={`${classes.quantity}`}>Quantity: {quantity}</p>
                    <p className={`${classes.price}`}>Price: ${price}</p>
                    <p className={`${classes.price}`}>Subtotal: ${price * quantity}</p>
                </div>
                <div>
                    <button className={`${classes.rmv_btn}`} onClick={() => removeItem(id)}>Remove</button>
                </div>
            </div>
        </div>
    )
}

export default CartItem