import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

function Landing() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default Landing