import { useState } from "react"
import styles from './CheckoutForm.module.css'

const CheckoutForm = ( {onCreateOrder} ) => {

    const INITIAL_STATE = {name: '', phone: '', email: ''}
    const [userData, setUserData] = useState(INITIAL_STATE)

    const handleChange = (e) => {
        setUserData(prev => ({...prev, [e.target.name]: e.target.value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onCreateOrder(userData)
        setUserData(INITIAL_STATE)
    }

    return (
        
        <form onSubmit={handleSubmit} className={styles.form}>
            <h3 className={styles.h3}>Complete the form to proceed</h3>
            <div className={styles.formItem}>
                <label htmlFor="name" className={styles.formLabel}>Name: </label>
                <input type="name" name="name" id="name" className={styles.formInput} value={userData.name} onChange={handleChange} required autoComplete="name"/>
            </div>
            <div className={styles.formItem}>
                <label htmlFor="phone" className={styles.formLabel}>Phone: </label>
                <input type="phone" name="phone" id="phone" className={styles.formInput} value={userData.phone} onChange={handleChange} required autoComplete="phone"/>
            </div>
            <div className={styles.formItem}>
                <label htmlFor="email" className={styles.formLabel}>Email: </label>
                <input type="email" name="email" id="email" className={styles.formInput} value={userData.email} onChange={handleChange} required autoComplete="email"/>
            </div>
            <div className={styles.formItem}>
                <div className={styles.formAction}>
                    <button type="submit" className={styles.form_btn} >Process Order</button>
                </div>
            </div>
        </form>
    )
}

export default CheckoutForm