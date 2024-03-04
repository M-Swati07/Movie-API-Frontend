import {Outlet} from "react-router-dom"     //Outlet is a component to generate boilerplate code from react router dom npm

import React from 'react'

const Layout = () => {
  return (
    <main>{<Outlet/>}</main>
  )
}

export default Layout