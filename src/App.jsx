import React from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import DetailPage from './components/Details/DetailPage'
import ProductsDetail from './components/Filter/ProductsDetail'



function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>} /> 
        <Route path='/category/:id' element={<DetailPage />} />
        <Route path='/filterle/:id' element={<ProductsDetail/>} />
      </Routes>
      <Footer/>

    </>
  )
}

export default App