import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { NavBar, Footer } from './'

const Layout = () => {
	return (
		<div className="w-full h-screen">
		  <NavBar />
		  <div className="mt-[8rem] px-2">
		  	<Outlet />	
		  </div>
	      
	      <Footer />
	    </div>
	)
}

export default Layout