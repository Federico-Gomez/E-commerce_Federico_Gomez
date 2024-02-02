export const createProductAdaptedFromDB = (doc) => {
    const fields = doc.data()
    return {
        id: doc.id,
        name: fields.name,
        category: fields.category,
        price: fields.price,
        img: fields.img,
        stock: fields.stock,
        description: fields.description
    }
}