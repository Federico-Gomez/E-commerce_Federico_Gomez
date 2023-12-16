const Button = (props) => {
    
    return(
        <button onClick={props.handleClick} style={{ color: "green"}}>{props.label}</button>
    )
}

export default Button