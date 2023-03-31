import React from 'react'
import { Navbar, Footer } from '../components'

function MainLayout({children}) {
  return (
    <>
        <Navbar></Navbar>
        <>{children}</>
        <Footer></Footer>
    </>
  )
}

export default MainLayout