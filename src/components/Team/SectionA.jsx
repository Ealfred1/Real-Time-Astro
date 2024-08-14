import React from 'react'
import { Link } from 'react-router-dom'
import data from '../../data/team.json'

const SectionA = () => {
	return (
		<section className="w-full flex items-center flex-col">
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
	              <div key={team.id} className="w-[20%] h-auto shadow-md border border-transparent bg-white rounded-xl flex items-center flex-col py-4">
	              	<div className="bg-primary">
	              		<img className="object-cover w-[10rem] h-[10rem] rounded-full" src={team.img} alt="" />	
	              	</div>
	                
	                <div className="max-w-prose p-4 space-y-8 text-center flex
	                items-center flex-col">
	                <h2 className="text-2xl text-slate-600 capitalize
	                font-bold">{team.name}</h2>
	                <Link to={`/teams/${team.id}`} className="w-full h-16 py-4 px-5 text-center bg-secondary text-lg grid place-content-center text-white rounded-xl">View Details</Link>
	                </div>
	              </div>
              )) }
			</div>
		</section>
	)
}

export default SectionA