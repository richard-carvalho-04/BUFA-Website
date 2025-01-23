import React from 'react'
import {Outlet} from 'react-router-dom'//we cannot give any other name to it it's the default name 
import Header from './components/Header/Header.jsx'
import Footer from './components/footer/Footer.jsx'

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