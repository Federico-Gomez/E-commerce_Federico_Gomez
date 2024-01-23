import cart from "./assets/cart-fill.svg"
import classes from "./CartWidget.module.css"
import { useCart } from "../../context/CartContext"
import { Link } from "react-router-dom"

const CartWidget = () => {

    const { totalQuantity } = useCart()

    return(
        <Link to='/cart' className={totalQuantity > 0 ? `${classes.widget}` : `${classes.no_widget}`}>
            <img className={`${classes.widget_img}`} src={cart} alt="cart-widget" />
            { totalQuantity }
        </Link>
    )
}

export default CartWidget