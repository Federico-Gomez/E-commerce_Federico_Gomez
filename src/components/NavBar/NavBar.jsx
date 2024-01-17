import ButtonDefault from "../ButtonDefault/ButtonDefault"
import Button from "../Button/Button"
import CartWidget from "../CartWidget/CartWidget"
import classes from "./NavBar.module.css"
import { Link } from "react-router-dom"
import { useState } from "react"

const NavBar = () => {

    const [menu, setMenu] = useState("Home")
    console.log(menu)

    return (
        <nav className={`${classes.navbar}`}>
            <Link to='/' className={`${classes.title}`} onClick={() => { setMenu("Home") }}>BT Games</Link>
            <section className={`${classes.navbar_menu}`}>
                <Link to='/' className={`${classes.btn}`}  onClick={() => { setMenu("Home") }} > Home {menu === "Home" ? <hr className={`${classes.hr}`} /> : <></>} </Link>
                <Link to={`/category/Consoles`} className={`${classes.btn}`}  onClick={() => { setMenu("Consoles") }} > Consoles {menu === "Consoles" ? <hr className={`${classes.hr}`} /> : <></>} </Link>
                <Link to={`/category/Accessories`} className={`${classes.btn}`}  onClick={() => { setMenu("Accessories") }} > Accessories {menu === "Accessories" ? <hr className={`${classes.hr}`} /> : <></>} </Link>
                <Link to={`/category/Games`} className={`${classes.btn}`}  onClick={() => { setMenu("Games") }} > Games {menu === "Games" ? <hr className={`${classes.hr}`} /> : <></>} </Link>
                <Link to={`/category/Contact`} className={`${classes.btn}`}  onClick={() => { setMenu("Contact") }} > Contact {menu === "Contact" ? <hr className={`${classes.hr}`} /> : <></>} </Link>
            </section>
            <CartWidget />
        </nav>
    )
}

export default NavBar