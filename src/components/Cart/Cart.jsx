import classes from "./Cart.module.css"
import { useCart } from "../../context/CartContext"
import { useNotification } from "../../notification/NotificationService"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"


const Cart = () => {

    const { cart, totalQuantity, total, clearCart } = useCart()

    if (totalQuantity === 0) {
        return (
            <div className={`${classes.empty_cart}`}>
                <h1 className={`${classes.empty_msg}`}>Cart is empty</h1>
                <Link className={`${classes.back}`} to='/'>Back</Link>
            </div>
        )
    }

    return (
        <div className={`${classes.cart}`}>

            {cart.map(prod => {
                return (
                    <CartItem key={prod.id} {...prod}/>
                )
            })}

            <h3 className={`${classes.total}`}>Total: ${total}</h3>
            <div className={`${classes.btn_container}`}>
                <button className={`${classes.clr_btn}`} onClick={() => clearCart()}>Clear cart</button>
                <Link className={`${classes.checkout}`} to='/checkout'>Checkout</Link>
            </div>

        </div>
    )
}

export default Cart