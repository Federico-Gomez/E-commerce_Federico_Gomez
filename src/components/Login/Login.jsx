import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"
import LoginForm from "../LoginForm/LoginForm"
import styles from './Login.module.css'

const Login = () => {
    const [loading,setLoading] = useState(false)
    const {signin} = useAuth()

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";

    const handleLoginWithEmail = (formData) => {
        setLoading(true)
        signin(formData.email, formData.password, () => {
            navigate(from, { replace: true })
        })
        .catch (error => {
            console.log(error)
        })
        .finally (() => {
            setLoading(false)
        })
    }

    if (loading) {
        return <h3>Loading...</h3>
    }

    return (
        <div>
            <h1 className={styles.h1}>Sign in</h1>
            <LoginForm onLogin={(formData) => handleLoginWithEmail(formData)} />
        </div>
    )
}

export default Login