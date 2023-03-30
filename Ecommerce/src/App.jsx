import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Details from './Componets/details'
import Product from './Componets/Product'
import Template from './Navbar/Template'


const App = () => {
  
  return (
    <Template>
      <Routes>
        <Route path='/' element={<Product/>} />
        <Route path='/details' element={<Details/>} />
      </Routes>
    </Template>
  )
}

export default App