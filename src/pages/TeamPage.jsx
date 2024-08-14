import React from 'react'
import { SectionA, SectionB } from '../components/'
import { Link } from 'react-router-dom'
import data from '../data/teamData.json'

const TeamPage = () => {
	return (
		<section>
			<SectionA />
			<SectionB />
			<section className="w-full h-full px-2 py-9 mt-4">
				<div className="flex flex-col items-center">
					<h3 className="text-secondary uppercase">Courses</h3>
					<h1 className="text-7xl font-serif text-center capitalize font-medium">Learn the practical science<br /> of astrology</h1>
				</div>

				<div className="w-full flex items-center flex-col lg:flex-row justify-around gap-3">
					{ data.map((course) => ()
						
					)}
				</div>
			</section>
		</section>
	)
}

export default TeamPage