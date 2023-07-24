import React from 'react'
import Nav from '../pages/Nav'
import { Outlet } from 'react-router-dom'
import Footer from '../pages/Footer'
const Layout = () => {
  return (
        <>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </> 

  )
}

export default Layout