import classes from "./AddToCartButton.module.css"

const AddToCartButton = (props) => {
    
    return(
        <button className={`${classes.add_to_cart_btn}`} onClick={props.handleClick} >{props.label} </button>
    )
}

export default AddToCartButton