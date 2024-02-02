import CartWidget from "../CartWidget/CartWidget"
import classes from "./NavBar.module.css"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { collection, getDocs, query, orderBy } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"
import { useAuth } from "../../context/AuthContext"

const NavBar = () => {

    const [menu, setMenu] = useState("Home")
    const { user } = useAuth()

    const [categories, setCategories] = useState([])

    useEffect(() => {
        const categoriesCollection = query(collection(db, 'categories'), orderBy('order'))

        getDocs(categoriesCollection)
            .then(querySnapshot => {
                const categoriesAdapted = querySnapshot.docs.map(doc => {
                    const fields = doc.data()
                    return { id: doc.id, ...fields }
                })

                setCategories(categoriesAdapted)
            })
    }, [])

    return (
        <nav className={`${classes.navbar}`}>
            <Link to='/' className={`${classes.title}`} onClick={() => { setMenu("Home") }}>BT Games</Link>
            <section className={`${classes.navbar_menu}`}>

                {
                    categories.map(cat => (
                        <Link key={cat.id} to={`/category/${cat.slug}`} className={`${classes.btn}`} onClick={() => { setMenu(`${cat.name}`) }} >{cat.name} {menu === `${cat.name}` ? <hr className={`${classes.hr}`} /> : <></>} </Link>
                    ))
                }

                {/* <section>
                    <Link to='/' className={`${classes.btn}`} onClick={() => { setMenu("Home") }} > Home {menu === "Home" ? <hr className={`${classes.hr}`} /> : <></>} </Link>
                    <Link to={`/category/Consoles`} className={`${classes.btn}`} onClick={() => { setMenu("Consoles") }} > Consoles {menu === "Consoles" ? <hr className={`${classes.hr}`} /> : <></>} </Link>
                    <Link to={`/category/Accessories`} className={`${classes.btn}`} onClick={() => { setMenu("Accessories") }} > Accessories {menu === "Accessories" ? <hr className={`${classes.hr}`} /> : <></>} </Link>
                    <Link to={`/category/Games`} className={`${classes.btn}`} onClick={() => { setMenu("Games") }} > Games {menu === "Games" ? <hr className={`${classes.hr}`} /> : <></>} </Link>
                </section> */}

            </section> 
            <CartWidget />
            <Link to='/login' className={`${classes.login_btn}`} > Login </Link>
        </nav>
    )
}

export default NavBar