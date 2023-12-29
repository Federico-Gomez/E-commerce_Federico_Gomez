import { useState } from "react"
import AddToCartButton from "../AddToCartButton/AddToCartButton"
import classes from "./ItemCount.module.css"

const ItemCount = (props) => {
    const [count, setCount] = useState(props.initialValue)
    const stock = 5

    const increase = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const decrease = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <div className={`${classes.counter_div}`}>
            <h1 className={`${classes.counter_title}`}>{props.title}</h1>
            <div className={`${classes.counter}`}>
                <button className={`${classes.counter_btn}`} onClick={decrease}>-</button>
                <h4>{count}</h4>
                <button className={`${classes.counter_btn}`} onClick={increase}>+</button>
            </div>
            <AddToCartButton label={"Add to Cart"} handleClick={() => localStorage.setItem("item", { count })} />
        </div>
    )
}

export default ItemCount