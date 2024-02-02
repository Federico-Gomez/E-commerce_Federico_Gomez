import { db } from "../firebaseConfig"
import { getDocs, getDoc, collection, doc, query, where, orderBy } from "firebase/firestore"
import { createProductAdaptedFromDB } from "../../../adapters/createProductAdaptedFromDB"

export const getProducts = (categoryId) => {
    const productsCollection = categoryId
        ? query(collection(db, 'products'), where('category', '==', categoryId))
        : query(collection(db, 'products'), orderBy('category'))

    return getDocs(productsCollection)
        .then(querySnapshot => {
            const productsAdapted = querySnapshot.docs.map(doc => {
                // const fields = doc.data()
                // return { id: doc.id, ...fields }
                return createProductAdaptedFromDB(doc)
            })
            return productsAdapted
        })
        .catch(error => {
            return error
        })
}

export const getProductById = (productId) => {
    const productDocument = doc(db, 'products', productId)

        return getDoc(productDocument)
            .then(queryDocumentSnapshot => {
                // const fields = queryDocumentSnapshot.data()
                // const productAdapted = {id: queryDocumentSnapshot.id, ...fields}
                // return productAdapted
                return createProductAdaptedFromDB(queryDocumentSnapshot)
            })
            .catch(error => {
                return error
            })
}

