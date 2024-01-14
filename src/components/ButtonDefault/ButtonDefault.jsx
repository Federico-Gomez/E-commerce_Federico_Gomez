import classes from "./ButtonDefault.module.css"
import { Link } from "react-router-dom"

const ButtonDefault = (props) => {
    
    return(
        <Link to='/' className={`${classes.btn}`} onClick={props.handleClick} > {props.label} <hr className={`${classes.hr}`}/> </Link>
    )
}

export default ButtonDefault