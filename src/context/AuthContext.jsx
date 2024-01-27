import { createContext, useContext, useState } from "react"

const AuthContext = createContext({})

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState()

    const login = (data) => {
        setUser({user: data.email})
    }

    const logout = () => {
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}