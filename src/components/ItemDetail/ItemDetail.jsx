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

        <article className={`${classes.articleContainer}`}>
            <h1 className={`${classes.name}`}>{name}</h1>
            <div className={`${classes.itemContainer}`}>
                <div>
                    <img className={`${classes.img}`} src={img} alt="imagen producto" />
                </div>
                <div>
                    <div className={`${classes.description}`}>
                        <p>Description:</p>
                        <p > {description}</p>
                    </div>
                    <p className={`${classes.category}`}>Category: {category}</p>
                    <h5 className={`${classes.price}`}>Price: ${price}</h5>
                    <ItemCount stock={stock} onAdd={handleOnAdd} />
                </div>
            </div>

        </article>
    )
}

export default ItemDetail