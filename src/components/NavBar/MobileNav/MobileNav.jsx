import { useState } from 'react'
import { Link } from 'react-router-dom'

const MobileNav = ({ isOpen, toggleMenu }) => {
	return (
		<>
			<div className={`mobile-menu ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
				<div className="w-[60vw] h-screen bg-neutrall p-[2rem]">
					<div className="text-2xl font-semibold mb-16">
						<h1 className="">RealTimeAstro</h1>
					</div>
					<ul className="flex flex-col gap-4 ml-2 space-y-4">
						<li className="navlink"><Link to="#home">Horoscope</Link></li>
						<li className="navlink"><Link to="#services">Astro-Tools</Link></li>
						<li className="navlink"><Link to="#projects">Services</Link></li>
						<li className="navlink"><Link to="#skills">Resources</Link></li>
						<li className="navlink"><Link to="#contact">Community</Link></li>
					</ul>
				</div>
			</div>
		</>
	)
}

export default MobileNav