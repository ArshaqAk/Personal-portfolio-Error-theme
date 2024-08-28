import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import './App.css'
import Contact from './Pages/Contact'
const App = () => {
  return (
    <div className='app'>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </div>
  )
}

export default App
