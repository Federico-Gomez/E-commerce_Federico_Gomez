import classes from "./ItemDetail.module.css"
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ id, name, category, img, price, description, stock }) => {

    const handleOnAdd = (quantity) => {
        const objProduct = {
            id,
            name,
            quantity,
            price
        }

        console.log('successfully added: ', objProduct)
    }

    return (
        <article>
            <h1>{name}</h1>
            <img className={`${classes.img}`} src={img} alt="imagen producto" />
            <p>Category: {category}</p>
            <h5>${price}</h5>
            <p>Description: {description}</p>
            <ItemCount stock={stock} onAdd={handleOnAdd}/>
        </article>
    )
}

export default ItemDetail