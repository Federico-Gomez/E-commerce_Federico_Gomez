import classes from './OrderDetailItem.module.css'
import { useCart } from '../../context/CartContext'

const OrderDetailItem = ({ id, name, quantity, price }) => {

    const { removeItem } = useCart()

    return (
        <div className={`${classes.container}`}>
            <div className={`${classes.item}`}>
                <h1 className={`${classes.name}`}>{name}</h1>
                <p className={`${classes.quantity}`}>Quantity: {quantity}</p>
                <p className={`${classes.price}`}>Subtotal: ${price * quantity}</p>
            </div>
            <div>
                <button className={`${classes.rmv_btn}`} onClick={() => removeItem(id)}>Remove</button>
            </div>
        </div>
    )
}

export default OrderDetailItem