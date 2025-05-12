import React from 'react'
import Header from '../user/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../user/Footer'

function UserLayout() {
  return (
    <div>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default UserLayout