import { createContext, useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar/'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { NotificationProvider } from './notification/NotificationService'
import Cart from './components/Cart/Cart'

function App() {

  return (
    <BrowserRouter>

      <NotificationProvider>
        <CartProvider>
          <div className='bg'>
            <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer greeting={"Welcome! What are you buying?"} />} />
              <Route path='/category/:categoryId' element={<ItemListContainer greeting={"Articles by Category"} />} />
              <Route path='/detail/:productId' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='*' element={<h1>Error 404</h1>} />
            </Routes>
          </div>
        </CartProvider>
      </NotificationProvider>

    </BrowserRouter>
  )
}

export default App
