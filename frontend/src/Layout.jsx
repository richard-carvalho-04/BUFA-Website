import React from 'react'
import {Outlet} from 'react-router-dom'//we cannot give any other name to it it's the default name 
import Header from './Components/Header/Header.jsx'
import Footer from './Components/Footer/Footer.jsx'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout