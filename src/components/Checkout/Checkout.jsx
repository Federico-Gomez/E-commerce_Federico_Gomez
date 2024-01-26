import { useCart } from "../../context/CartContext"
import CheckoutForm from "../CheckoutForm/CheckoutForm"
import styles from './Checkout.module.css'

const Checkout = () => {

    const {cart, total, clearCart} = useCart()

    const createOrder = () => {
        const objOrder = () => {
            


        }
    }

    return (
        <div>
            <h1 className={styles.h1}>Checkout</h1>
            <CheckoutForm />
        </div>
    )
}

export default Checkout