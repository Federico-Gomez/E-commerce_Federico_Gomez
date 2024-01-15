import ButtonDefault from "../ButtonDefault/ButtonDefault"
import Button from "../Button/Button"
import CartWidget from "../CartWidget/CartWidget" 
import classes from "./NavBar.module.css"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className={`${classes.navbar}`}>
            <Link to='/' className={`${classes.title}`}>BT Games</Link>
            <section className={`${classes.navbar_menu}`}>
                <ButtonDefault label={"Home"} handleClick={() => console.log("Home")} />
                <Button label={"Consoles"} handleClick={() => console.log("Consoles")}/>
                <Button label={"Games"} handleClick={() => console.log("Games")}/>
                <Button label={"About Us"} handleClick={() => console.log("About Us")}/>
                <Button label={"Contact"} handleClick={() => console.log("Contact")}/>
            </section>
            <CartWidget/>
        </nav>
    )
}

export default NavBar