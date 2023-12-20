import { useState } from "react"
import Button from "../Button/Button"

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
        <div>
            <h1 style={{ fontSize: "20px" }}>{props.title}</h1>
            <div style={{display: "flex", flexDirection: "row", justifyContent:"center", alignItems: "center"}}>
                <button onClick={decrease}>Remove</button>
                <h4>{count}</h4>
                <button onClick={increase}>Add</button>
                <Button label={"Add to Cart"} handleClick={() => localStorage.setItem("item", { count })} />
            </div>

        </div>
    )
}

export default ItemCount