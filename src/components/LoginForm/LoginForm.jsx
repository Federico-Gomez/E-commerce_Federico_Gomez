import { useState } from "react"
import styles from './LoginForm.module.css'

const LoginForm = ({onLogin}) => {

    const INITIAL_STATE = {email: '', password: ''}
    const [formData, setFormData] = useState(INITIAL_STATE)

    const handleChange = (e) => {
        setFormData(prev => ({...prev, [e.target.name]: e.target.value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onLogin(formData)
        setFormData(INITIAL_STATE)
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formItem}>
                <label htmlFor="email" className={styles.formLabel}>Email: </label>
                <input type="email" name="email" id="email" className={styles.formInput} value={formData.email} onChange={handleChange} required autoComplete="email"/>
            </div>
            <div className={styles.formItem}>
                <label htmlFor="password" className={styles.formLabel}>Password: </label>
                <input type="password" name="password" id="password" className={styles.formInput} value={formData.password} onChange={handleChange} required autoComplete="password"/>
            </div>
            <div className={styles.formItem}>
                <div className={styles.formAction}>
                    <button type="submit" className={styles.form_btn}>Login</button>
                </div>
            </div>


        </form>
    )

}

export default LoginForm