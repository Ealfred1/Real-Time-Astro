import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { NavBar } from './'

const Layout = () => {
	return (
		<div>
		  <NavBar />
	      <Outlet />
	    </div>
	)
}

export default Layout