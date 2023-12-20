import Button from "../Button/Button"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h1>Kryptos</h1>
            <section>
                <Button label={"Home"} handleClick={() => console.log("Home")} />
                <Button label={"Tokens"} handleClick={() => console.log("Tokens")}/>
                <Button label={"NFTs"} handleClick={() => console.log("NFTs")}/>
                <Button label={"About Us"} handleClick={() => console.log("About Us")}/>
                <Button label={"Contact"} handleClick={() => console.log("Contact")}/>
            </section>
            <CartWidget/>
        </nav>
    )
}

export default NavBar