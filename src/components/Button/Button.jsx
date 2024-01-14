import classes from "./Button.module.css"
import { Link } from "react-router-dom"

const Button = (props) => {
    
    return(
        <Link to={`/category/${props.label}`} className={`${classes.btn}`} onClick={props.handleClick} >{props.label} </Link>
    )
}

export default Button