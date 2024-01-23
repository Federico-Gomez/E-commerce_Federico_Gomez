import { createContext, useContext, useState } from "react"

const CartContext = createContext({
    cart: [],
    addItem: () => {},
    removeItem: () => {},
    totalQuantity: 0,
    total: 0,
    clearCart: () => {}
})

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    console.log(cart)

    const addItem = (productToAdd) => {
      if (!isInCart(productToAdd.id)) {
        setCart(prev => [...prev, productToAdd])
      } else {
        console.log("This product has already been added to your cart.")
      }
    }
  
    const isInCart = (id) => {
      return cart.some(prod => prod.id === id)
    }
  
    const removeItem = (id) => {
      const cartUpdated = cart.filter(prod => prod.id !== id)
      setCart(cartUpdated)
    }

    const getTotalQuantity = () => {
        let acc = 0

        cart.forEach(prod => {
            acc += prod.quantity
        })

        return acc
    }

    const totalQuantity = getTotalQuantity()

    const getTotal = () => {
        let acc = 0

        cart.forEach(prod => {
            acc += prod.price*prod.quantity
        })

        return acc
    }

    const total = getTotal()
    console.log(total)

    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, totalQuantity, total, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}
