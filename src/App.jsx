import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar/'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <div className='bg'>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={"Welcome! What are you buying?"} />}/>
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={"Articles by category"} />}/>
          <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
          <Route path='*' element={<h1>Error 404</h1>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
