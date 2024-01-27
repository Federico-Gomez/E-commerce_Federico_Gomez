import { useCart } from "../../context/CartContext"
import styles from './OrderDetail.module.css'
import { Link } from "react-router-dom"
import OrderDetailItem from "../OrderDetailItem/OrderDetailItem"

const OrderDetail = () => {

    const { cart, total } = useCart()

    return (
        <div className={styles.cart}>

            {cart.map(prod => {
                return (
                    <OrderDetailItem key={prod.id} {...prod}/>
                )
            })}

            <h3 className={styles.total}>Total: ${total}</h3>
            <Link className={styles.back} to='/cart'>Back to Cart</Link>

        </div>
    )
}

export default OrderDetail