import { createContext, useContext, useState } from "react"
import { useNavigate } from "react-router-dom"

import { auth } from "../services/firebase/firebaseConfig"
import { createUser, updateUser } from "../services/firebase/firestore/users"
import { signOut, signInWithEmailAndPassword } from "firebase/auth"

const AuthContext = createContext()

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const navigate = useNavigate()

    const formatUser = (rawUser) => {
        return {
            uid: rawUser.uid,
            email: rawUser.email,
            name: rawUser.displayName,
            provider: rawUser.providerData[0].providerId,
            photoUrl: rawUser.photoUrl,
            token: rawUser.accessToken
        }
    }

    const handleUser = async(rawUser) => {
        if (rawUser) {
            const user = formatUser(rawUser)
            const { token, ...userWithoutToken } = user
            const createdUser = await createUser(user.uid, userWithoutToken)
            setUser(createdUser)
            return user
        } else {
            setUser(null)
            return false
        }
    }

    const signin = (email, password, callback) => {
        return signInWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                const user = userCredential.user
                const userData = await handleUser(user)
                callback()
                return userData
            })
            .catch((error) => {
                console.log(error)
            })
    }
   
    const updateUserData = async(updatedData) => {
        try {
            const updatedUser = await updateUser(user.uid, updatedData)
            setUser(updatedUser)
        } catch (error) {
            console.log(error)
        }
    }

    const signout = () => {
        signOut(auth)
            .then(() => {
                handleUser(false)
                navigate('/')
            })
    }

    return (
        <AuthContext.Provider value={{ user, signin, updateUserData, signout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}