import { useState } from "react"
import classes from "./ItemCount.module.css"

const ItemCount = ({ initial = 1, stock, onAdd }) => {
    const [count, setCount] = useState(initial)

    const increase = () => {
        if (count < stock) {
            setCount(prev => prev + 1)
        }
    }

    const decrease = () => {
        if (count > 1) {
            setCount(prev => prev - 1)
        }
    }

    return (
        <div className={`${classes.counter_div}`}>
            <div className={`${classes.counter}`}>
                <h4>{count}</h4>
                <button className={`${classes.counter_btn}`} onClick={decrease}>-</button>
                <button onClick={() => onAdd(count)} >Add to Cart</button>
                <button className={`${classes.counter_btn}`} onClick={increase}>+</button>
            </div>
        </div>
    )
}

export default ItemCount