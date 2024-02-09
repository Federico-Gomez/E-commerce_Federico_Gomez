import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"
import LoginForm from "../LoginForm/LoginForm"
import styles from './Login.module.css'

const Login = () => {
    const [loading, setLoading] = useState(false)

    const { user, signin, signout, newUserWithEmailAndPassword, error } = useAuth()

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";

    const handleRegisterWithEmail = (userData) => {
        newUserWithEmailAndPassword(userData.email, userData.password, () => {
            navigate(from, { replace: true })
        })
            .catch(error => {
               console.log(error)
           })
           .finally(() => {
                setLoading(false)
           })
    }

    const handleSignInWithEmail = (userData) => {
        signin(userData.email, userData.password, () => {
            navigate(from, { replace: true })
        })
            .catch(error => {
               console.log(error)
           })
           .finally(() => {
                setLoading(false)
           })
    }


    if (loading) {
        return <h3>Loading...</h3>
    }

    return (
        <>
            <>
                {!user && !error &&
                    <div>
                        <h1 className={styles.h1}>Sign in</h1>
                        <LoginForm onRegister={(userData) => handleRegisterWithEmail(userData)}
                        onSignIn={(userData) => handleSignInWithEmail(userData)} />
                    </div>
                }
            </>

            <>
                {error &&
                    <div >
                        <h4 className={styles.error}>There was an error</h4>
                        <button className={styles.logout_btn} onClick={signout}>Go back</button>
                    </div>
                }
            </>

        </>
    )
}

export default Login