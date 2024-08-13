import { useState } from 'react'


const MobileNav = ({ isOpen, toggleMenu }) => {
	return (
		<>
			<div className={`mobile-menu ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
				<div className="w-[60vw] h-screen bg-neutrall p-[2rem]">
					<div className="text-2xl font-semibold mb-16">
						<h1 className="">RealTimeAstro</h1>
					</div>
					<ul className="flex flex-col gap-4 ml-2 space-y-4">
						<li className="navlink"><Link href="#home">Home</a></li>
						<li className="navlink"><Link href="#services">Services</a></li>
						<li className="navlink"><Link href="#projects">Projects</a></li>
						<li className="navlink"><Link href="#skills">Skills</a></li>
						<li className="navlink"><Link href="#contact">Contact Me</a></li>
					</ul>
				</div>
			</div>
		</>
	)
}

export default MobileNav