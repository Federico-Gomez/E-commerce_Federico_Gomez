import classes from "./ButtonDefault.module.css"
import { Link } from "react-router-dom"

const ButtonDefault = (props) => {
    
    return(
        <Link to='/' className={`${classes.btn}`} onClick={props.handleClick} > {props.label} {props.hr} </Link>
    )
}

export default ButtonDefault