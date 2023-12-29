import classes from "./ItemListContainer.module.css"

const ItemListContainer = ({ greeting }) => {
    return(
        <div>
            <h3 className={`${classes.h3}`}>{greeting}</h3>
        </div>
    )
}

export default ItemListContainer