import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar/'
import ItemCount from './components/ItemCount/ItemCount'

function App() {

  return (
    <>
      <NavBar/>
      <ItemCount title={"Gift Cards"} initialValue={0} />
      <ItemCount title={"Other Promotional Codes"} initialValue={0} />
    </>
  )
}

export default App
