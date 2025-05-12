import React, { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import { Route, Routes, useLocation } from 'react-router-dom'
import DetailPage from './components/Details/DetailPage'
import ProductsDetail from './components/Filter/ProductsDetail'
import SearchPage from './components/Search/SearchPage'
import WishList from './components/Header/WishList'
import Landing from './Layout/Landing'
import Error404 from './components/Error/Error404'
import { scrollYuxari } from './utils/scrollTop'
import Login from './Auth/Login'
import { Toaster } from 'react-hot-toast'
import UserDashBoard from './components/user/UserDashBoard'
import UserLayout from './components/Layout/UserLayout'
import { Cookies } from 'react-cookie'
import { verifyToken } from './services/api'

function App() {
  const { pathname } = useLocation()
  useEffect(() => {
    scrollYuxari()
  }, [pathname])
  const cook = new Cookies()
  const [auth, setAuth] = useState(false)
  useEffect(() => {
    if (cook.get('token') && cook.get('status')) {
      verifyToken().then(res => {
        setAuth(res.status)
      })

    }
  }, [])
  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <Routes>
        <Route path='/' element={<Landing />}>
          <Route path="/" element={<Main />} />
          <Route path='/category/:id' element={<DetailPage />} />
          <Route path='/filterle/:id' element={<ProductsDetail />} />
          <Route path="/search/:searchValue" element={<SearchPage />} />
          <Route path='/wishlist' element={<WishList />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<Error404 />} />
        </Route>

        {auth &&
          <Route path='/user' element={<UserLayout />}>
            <Route index element={<UserDashBoard />} />
          </Route>
        }
      </Routes>
    </>
  )
}

export default App