import { useState } from "react"
import styles from './LoginForm.module.css'

const LoginForm = ({ onRegister, onSignIn }) => {

    const INITIAL_STATE = { email: '', password: '' }
    const [userData, setUserData] = useState(INITIAL_STATE)

    const handleChange = (e) => {
        setUserData(({ ...userData, [e.target.name]: e.target.value }))
    }

    const handleRegister = (e) => {
        e.preventDefault()
        onRegister(userData)
        setUserData(INITIAL_STATE)
        console.log(userData)
    }

    const handleSignIn = (e) => {
        e.preventDefault()
        onSignIn(userData)
        setUserData(INITIAL_STATE)
        console.log(userData)
    }

    return (
        <form className={styles.form}>
            <div className={styles.formItem}>
                <label htmlFor="email" className={styles.formLabel}>Email: </label>
                <input type="email" name="email" id="email" className={styles.formInput} value={userData.email} onChange={handleChange} required autoComplete="email" />
            </div>
            <div className={styles.formItem}>
                <label htmlFor="password" className={styles.formLabel}>Password: </label>
                <input type="password" name="password" id="password" className={styles.formInput} value={userData.password} onChange={handleChange} required autoComplete="password" />
            </div>
            <div className={styles.formItem}>
                <div className={styles.formAction}>
                    <button onClick={handleRegister} type="submit" className={styles.form_btn}>Register</button>
                    <button onClick={handleSignIn} type="submit" className={styles.form_btn}>Sign in</button>
                </div>
            </div>
        </form>
    )

}

export default LoginForm