import cart from "./assets/cart-fill.svg"

const CartWidget = () => {

    return(
        <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
            <img src={cart} alt="cart-widget" />
            0
        </div>
    )
}

export default CartWidget