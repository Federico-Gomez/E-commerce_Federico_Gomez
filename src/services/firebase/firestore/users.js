import { db } from "../firebaseConfig"
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore"

export const createUser = async(uid, data) => {
    try {
        const userRef = doc(db, 'users', uid)
        await setDoc(userRef, data, { merge: true })
        const user = await getDoc(userRef)
        console.log(data)
        return user.data()
    } catch (error) {
        console.log(error)
    }
}

export const updateUser = async(uid, data) => {
    try {
        const userRef = doc(db, 'users', uid)
        await updateDoc(userRef, data)
        const user = await getDoc(userRef)
        return user.data()
    } catch (error) {
        console.log(error)
    }

}