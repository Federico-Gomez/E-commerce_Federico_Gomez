import classes from "./ItemList.module.css"
import Item from "../Item/Item"

const ItemList = ({ products }) => {
    return (
        <div>
            {products.map(prod => {
                return (
                    <Item key={prod.id} {... prod}/>
                )
            })}
        </div>
    )
}

export default ItemList