import classes from "./Item.module.css"

const Item = ({name, img}) => {
    return (
        <div>
            <h1>{name}</h1>
            <img src={img} alt="imagen producto" />
        </div>
    )
}

export default Item