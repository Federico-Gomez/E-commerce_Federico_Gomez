import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar/'
import ItemCount from './components/ItemCount/ItemCount'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {

  return (
    <div className='bg'>
      <NavBar/>
      <ItemListContainer greeting={"Welcome! What are you buying?"} />
      <ItemCount title={"Bofes"} initialValue={0} />
    </div>
  )
}

export default App
