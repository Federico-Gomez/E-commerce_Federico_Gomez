
import './App.css'
import NavBar from './components/NavBar/NavBar/'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { NotificationProvider } from './notification/NotificationService'

import { AuthProvider } from './context/AuthContext'

import AppRouter from './routes/AppRouter'

function App() {

  return (
    <BrowserRouter>
      <NotificationProvider>
        <AuthProvider>
          <CartProvider>
            <div className='bg'>
              <NavBar />
              <AppRouter />
            </div>
          </CartProvider>
        </AuthProvider>
      </NotificationProvider>
    </BrowserRouter>
  )
}

export default App
