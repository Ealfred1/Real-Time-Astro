import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { NavBar, Footer } from './'

const Layout = () => {
	return (
		<div>
		  <NavBar />
		  <div className="mt-[8rem]">
		  	<Outlet />	
		  </div>
	      
	      <Footer />
	    </div>
	)
}

export default Layout