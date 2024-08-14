import { useState } from 'react'
import MobileNav from './MobileNav/MobileNav'
import { Link } from 'react-router-dom'

const NavBar = () => {
	const [openMenu, setOpenMenu] = useState(false)

	const toggleMenu = () => {
		setOpenMenu(!openMenu)
	}

	return (
		<>
			<MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
			<nav className="bg-transparent py-2 fixed top-0 z-[30] backdrop-blur-3xl w-full">
				<div className="max-w-6xl flex items-center justify-between py-4 mx-auto px-[1rem] md:px-[1.5rem]">
					<div className="text-2xl font-semibold">
						<h1 className="">RealTimeAstro</h1>
					</div>

					<ul className="items-center gap-2 space-x-10 hidden lg:flex">
						<li className="navlink"><Link to="#home">Horoscope</Link></li>
						<li className="navlink"><Link to="/team">Astro-Tools</Link></li>
						<li className="navlink"><Link to="#projects">Services</Link></li>
						<li className="navlink"><Link to="#skills">Resources</Link></li>
						<li className="navlink"><Link to="#contact">Community</Link></li>
					</ul>
					
					<button className="menu-btn" onClick={toggleMenu}><span className={`pi ${openMenu ? 'pi-times' : 'pi-bars'} text-[1rem]`}></span></button>
				</div>
			</nav>
		</>
	)
}

export default NavBar