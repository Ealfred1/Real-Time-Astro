import React from 'react'
import { Link } from 'react-router-dom'

const SectionB = () => {
	return (
		<section className="my-9 bg-[url('/zodiac4.png')] bg-no-repeat bg-cover">
			<div className="bg-gradient-to-r from-[rgba(50,50,50,0.9)] to-tertiary w-full h-full flex items-center justify-center flex-col w-full h-[20rem] py-12 gap-4">
				<div className="flex items-center justify-center flex-col">
				<h1 className="text-[4.2rem] tracking-tight uppercase text-center text-white whitespace-nowrap font-serif">join our community; Become a member</h1>
				<p className="text-white text-center max-w-3xl">Lorem ipsum dolor and more context, and more and more and plenty more. Lorem ipsum dolor and more context, and more and more and plenty more. Lorem ipsum dolor and more context, and more and more and plenty more.</p>
			</div>
			<Link to="/register" className="w-[30%] h-14 py-3 font-semibold px-5 text-center bg-secondary text-sm grid place-content-center text-primary rounded-xl hover:opacity-70 cursor-pointer">Sign Up</Link>
			</div>
		</section>
	)
}

export default SectionB