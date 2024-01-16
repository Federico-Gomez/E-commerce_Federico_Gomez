import classes from "./Item.module.css"
import { Link } from "react-router-dom"

const Item = ({ id, name, category, img, price }) => {
    return (
        <div className={`${classes.itemContainer}`}>
            <h1 className={`${classes.name}`}>{name}</h1>
            <img className={`${classes.img}`} src={img} alt="imagen producto" />
            <p className={`${classes.category}`}>Category: {category}</p>
            <h5 className={`${classes.price}`}>${price}</h5>
            <Link to={`/detail/${id}`} className={`${classes.btn}`}>Info</Link>
        </div>
    )
}

export default Item