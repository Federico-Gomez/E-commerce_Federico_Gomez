import classes from "./Item.module.css"
import { Link } from "react-router-dom"

const Item = ({ id, name, category, img, price }) => {
    return (
        <div>
            <h1>{name}</h1>
            <img className={`${classes.img}`} src={img} alt="imagen producto" />
            <p>Category: {category}</p>
            <h5>${price}</h5>
            <Link to={`/detail/${id}`} className={'btn btn-success'}>Ver detalle</Link>
        </div>
    )
}

export default Item