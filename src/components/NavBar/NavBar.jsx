import Button from "../Button/Button"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h1>E-commerce</h1>
            <section>
                <Button label={"Home"} handleClick={() => console.log("Home")} />
                <Button label={"PC/Mac"} handleClick={() => console.log("PC/Mac")}/>
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