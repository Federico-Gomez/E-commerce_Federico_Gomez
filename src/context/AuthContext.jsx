import { createContext, useContext, useState } from "react"
import { useNavigate } from "react-router-dom"

import { auth } from "../services/firebase/firebaseConfig"
import { createUser, updateUser } from "../services/firebase/firestore/users"
import { signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from "firebase/auth"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const formatUser = (rawUser) => {
        return {
            uid: rawUser.uid,
            email: rawUser.email,
            name: rawUser.displayName,
            provider: rawUser.providerData[0]?.providerId,
            token: rawUser.accessToken,
        }
    }

    const handleUser = async (rawUser) => {
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
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                const user = userCredential.user
                setUser(user)
                callback()
                console.log(user)
            })
            .catch((error) => {
                return console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }
    

    const updateUserData = async (updatedData) => {
        try {
            const updatedUser = await updateUser(user.uid, updatedData)
            setUser(updatedUser)
        } catch (error) {
            console.log(error)
        }
    }

    const newUserWithEmailAndPassword = (email, password, callback) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
        .then(async(userCredential) => {
            const user = userCredential.user;
            const userData = await handleUser(user)
            callback()
            return userData
        })
        .catch((error) => {
            setError(error.message)
            console.log(error)
        })
        .finally(() => {
            setLoading(false)
        })
    }

    // En una etapa anterior usé esta función cuando tuve problemas con la función signin
    const userWithEmailAndPassword = (userData) => {
        setLoading(true)
        signInWithEmailAndPassword(auth, userData.email, userData.password)
        .then((userCredential) => {
            const user = userCredential.user;
            setUser(user)
            console.log(user)
        })
        .catch((error) => {
            setError(error.message)
            console.log(error)
        })
        .finally(() => {
            setLoading(false)
        })
    }

    const signout = () => {
        signOut(auth)
            .then(() => {
                setUser(null)
                setError('')
                navigate('/')
            })
    }

    if (loading) {
        return <h3>Loading...</h3>
    }

    return (
        <AuthContext.Provider value={{ user, signin, updateUserData, newUserWithEmailAndPassword, userWithEmailAndPassword, signout, error }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}