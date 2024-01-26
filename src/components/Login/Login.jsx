import { useAuth } from "../../context/AuthContext"
import LoginForm from "../LoginForm/LoginForm"
import styles from './Login.module.css'

const Login = () => {

    const {login} = useAuth()

    return (
        <div>
            <h1 className={styles.h1}>Login</h1>
            <LoginForm onLogin={(formData) => login(formData)} />
        </div>
    )
}

export default Login