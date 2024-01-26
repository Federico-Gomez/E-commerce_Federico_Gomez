import { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from "../context/AuthContext"
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'
import Cart from '../components/Cart/Cart'
import Login from '../components/Login/Login'
import Checkout from '../components/Checkout/Checkout'
import ProtectedRoute from './components/ProtectedRoute'
import PublicRoute from './components/PublicRoute'

const AppRouter = () => {
    const { user } = useAuth()

    return (
        <Routes>
            <Route path='/' element={<ItemListContainer greeting={"Welcome! What are you buying?"} />} />

            <Route path='/category/:categoryId' element={<ItemListContainer greeting={"Articles by Category: "} />} />

            <Route path='/detail/:productId' element={<ItemDetailContainer />} />

            <Route>
                <Route path='/cart' element={<Cart />} />
            </Route>

            <Route>
                <Route path='/checkout' element={<Checkout />} />
            </Route>

            <Route element={<PublicRoute user={user} redirectPath='/'/>}>
                <Route path='/login' element={<Login />} />
            </Route>

            <Route path='*' element={<h1>404 Not available</h1>} />
        </Routes>
    )
}

export default AppRouter