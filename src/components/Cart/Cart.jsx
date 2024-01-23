import classes from "./Cart.module.css"
import { useCart } from "../../context/CartContext"
import { useNotification } from "../../notification/NotificationService"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"


const Cart = () => {

    const { cart, totalQuantity, total, clearCart } = useCart()

    if (totalQuantity === 0) {
        return (
            <div className={`${classes.cart}`}>
                <h1>Cart is empty</h1>
                <Link to='/'>Back</Link>
            </div>
        )
    }

    return (
        <div className={`${classes.cart}`}>

            {cart.map(prod => {
                return (
                    <CartItem key={prod.id} {... prod} />
                )
            })}

            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()}>Clear cart</button>
            <Link to='/checkout'>Checkout</Link>
        </div>
    )
}

export default Cart