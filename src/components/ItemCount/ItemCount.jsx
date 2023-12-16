import { useState } from "react"

const ItemCount = (props) => {
    const [count, setCount] = useState(props.initialValue)

    const increase = () => {
        if(count < 5) {
            setCount(count + 1)
        } 
    }

    const decrease = () => {
        if(count > 0) {
            setCount(count - 1)
        }  
    }

    return(
        <div>
            <h1 style={{fontSize: "24px"}}>{props.title}</h1>
            <h1>{count}</h1>
            <button onClick={increase}>Add</button>
            <button onClick={decrease}>Remove</button>
        </div>
    )
}

export default ItemCount