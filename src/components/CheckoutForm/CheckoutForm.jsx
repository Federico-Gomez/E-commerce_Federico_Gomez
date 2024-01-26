import { useState } from "react"
import styles from './CheckoutForm.module.css'

const CheckoutForm = ({onCheckout}) => {

    const INITIAL_STATE = {name: '', phone: '', email: ''}
    const [formData, setFormData] = useState(INITIAL_STATE)

    const handleChange = (e) => {
        setFormData(prev => ({...prev, [e.target.name]: e.target.value}))
    }
    console.log(handleChange)

    const handleSubmit = (e) => {
        e.preventDefault()
        onCheckout(formData)
        setFormData(INITIAL_STATE)
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formItem}>
                <label htmlFor="name" className={styles.formLabel}>Name: </label>
                <input type="name" name="name" id="name" className={styles.formInput} value={formData.name} onChange={handleChange} required autoComplete="name"/>
            </div>
            <div className={styles.formItem}>
                <label htmlFor="phone" className={styles.formLabel}>Phone: </label>
                <input type="phone" name="phone" id="phone" className={styles.formInput} value={formData.phone} onChange={handleChange} required autoComplete="phone"/>
            </div>
            <div className={styles.formItem}>
                <label htmlFor="email" className={styles.formLabel}>Email: </label>
                <input type="email" name="email" id="email" className={styles.formInput} value={formData.email} onChange={handleChange} required autoComplete="email"/>
            </div>
            <div className={styles.formItem}>
                <div className={styles.formAction}>
                    <button type="submit" className={styles.form_btn} >Checkout</button>
                </div>
            </div>
        </form>
    )

}

export default CheckoutForm