import classes from "./Button.module.css"

const Button = (props) => {
    
    return(
        <button className={`${classes.btn}`} onClick={props.handleClick} >{props.label} </button>
    )
}

export default Button