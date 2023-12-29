import ButtonDefault from "../ButtonDefault/ButtonDefault"
import Button from "../Button/Button"
import CartWidget from "../CartWidget/CartWidget" 
import classes from "./NavBar.module.css"

const NavBar = () => {
    return (
        <nav className={`${classes.navbar}`}>
            <h1 className={`${classes.title}`}>BT Games</h1>
            <section className={`${classes.navbar_menu}`}>
                <ButtonDefault label={"Home"} handleClick={() => console.log("Home")} />
                <Button label={"Consoles"} handleClick={() => console.log("Consolas")}/>
                <Button label={"Games"} handleClick={() => console.log("Juegos")}/>
                <Button label={"About Us"} handleClick={() => console.log("About Us")}/>
                <Button label={"Contact"} handleClick={() => console.log("Contact")}/>
            </section>
            <CartWidget/>
        </nav>
    )
}

export default NavBar