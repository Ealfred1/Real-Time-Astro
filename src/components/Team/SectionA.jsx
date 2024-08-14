import React from 'react'
import { Link } from 'react-router-dom'
import data from '../../data/team.json'

const SectionA = () => {
	return (
		<section className="w-full flex items-center flex-col space-y-16">
			<div className="flex items-center flex-col w-1/2">
				<div className="mb-2">
					<h1 className="text-secondary text-[4.5rem] font-serif font-semibold">Astro-Team</h1>
				</div>
				<div className="max-w-prose text-center">
					<p className="">
						Learn from our experts readers and be guided on your transformative<br /> journey of self-discovery through the powerful wisdom of astrology.
					</p>
				</div>
			</div>

			<div className="flex items-center justify-around gap-3 w-[90%]">
				{ data.map((team) => (
	              <div key={team.id} className="w-[20%] h-auto flex items-center flex-col py-4">
	              	<div className="bg-primary">
	              		<img className="object-cover w-[11rem] h-[11rem] rounded-full" src={team.img} alt="" />	
	              	</div>
	                
	                <div className="p-4 space-y-2 text-center flex
	                items-center flex-col">
	                <h2 className="text-lg tracking-tight text-primary uppercase">{team.name}</h2>
	                <Link to={`/teams/${team.id}`} className="h-10 py-2 px-5 text-center bg-secondary text-sm grid place-content-center text-primary rounded-xl hover:opacity-70 cursor-pointer">Consult</Link>
	                </div>
	              </div>
              )) }
			</div>
		</section>
	)
}

export default SectionA