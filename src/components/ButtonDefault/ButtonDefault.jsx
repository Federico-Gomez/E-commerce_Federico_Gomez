import classes from "./ButtonDefault.module.css"

const ButtonDefault = (props) => {
    
    return(
        <button className={`${classes.btn}`} onClick={props.handleClick} >{props.label} <hr className={`${classes.hr}`}/> </button>
    )
}

export default ButtonDefault