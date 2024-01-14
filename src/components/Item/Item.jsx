import classes from "./Item.module.css"
import ItemCount from '../ItemCount/ItemCount'
import { Link } from "react-router-dom"

const Item = ({id, name, img, price}) => {
    return (
        <div>
            <h1>{name}</h1>
            <img className={`${classes.img}`} src={img} alt="imagen producto" />
            <h5>{price}</h5>
            <Link to={`/detail/${id}`} className={'btn btn-success'}>Ver detalle</Link>
            {/* <ItemCount title={"Bofes"} initialValue={0} /> */}
        </div>
    )
}

export default Item