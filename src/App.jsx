import React from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import DetailPage from './components/Details/DetailPage'
import ProductsDetail from './components/Filter/ProductsDetail'
import SearchPage from './components/Search/SearchPage'
import WishList from './components/Header/WishList'



function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>} /> 
        <Route path='/category/:id' element={<DetailPage />} />
        <Route path='/filterle/:id' element={<ProductsDetail/>} />
        <Route path="/search/:searchValue" element={<SearchPage />} />
        <Route path='/wishlist' element={<WishList />} />
      </Routes>
      <Footer/>

    </>
  )
}

export default App