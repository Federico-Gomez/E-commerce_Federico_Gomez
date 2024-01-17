import cart from "./assets/cart-fill.svg"
import classes from "./CartWidget.module.css"
import { useCart } from "../../context/CartContext"

const CartWidget = () => {

    const { totalQuantity } = useCart()

    return(
        <div className={`${classes.widget}`}>
            <img className={`${classes.widget_img}`} src={cart} alt="cart-widget" />
            { totalQuantity }
        </div>
    )
}

export default CartWidget