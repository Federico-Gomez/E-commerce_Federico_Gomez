import cart from "./assets/cart-fill.svg"
import classes from "./CartWidget.module.css"

const CartWidget = () => {

    return(
        <div className={`${classes.widget}`}>
            <img className={`${classes.widget_img}`} src={cart} alt="cart-widget" />
            0
        </div>
    )
}

export default CartWidget