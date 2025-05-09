import React, { useEffect } from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import { Route, Routes, useLocation } from 'react-router-dom'
import DetailPage from './components/Details/DetailPage'
import ProductsDetail from './components/Filter/ProductsDetail'
import SearchPage from './components/Search/SearchPage'
import WishList from './components/Header/WishList'
import Landing from './components/Layout/Landing'
import Error404 from './components/Error/Error404'
import { scrollYuxari } from './utils/scrollTop'
import Login from './Auth/Login'





function App() {
  const {pathname} = useLocation()
  useEffect(() => {
    scrollYuxari()
  }, [pathname])
  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />}>
          <Route path="/" element={<Main />} />
          <Route path='/category/:id' element={<DetailPage />} />
          <Route path='/filterle/:id' element={<ProductsDetail />} />
          <Route path="/search/:searchValue" element={<SearchPage />} />
          <Route path='/wishlist' element={<WishList />} />
          <Route path='/login' element={<Login />}/>
          <Route path='*' element={<Error404 />} />
        </Route>
      </Routes>
    </>
  )
}

export default App