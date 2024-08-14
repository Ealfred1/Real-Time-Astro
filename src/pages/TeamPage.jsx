import React from 'react'
import { SectionA, SectionB, CourseBox, Testimonials } from '../components/'
import { Link } from 'react-router-dom'
import data from '../data/teamData.json'

const TeamPage = () => {
	return (
		<section>
			<SectionA />
			<SectionB />
			<section className="w-full h-full px-2 py-9 mt-4">
				<div className="flex flex-col items-center mb-14">
					<h3 className="text-secondary uppercase">Courses</h3>
					<h1 className="text-7xl font-serif text-center capitalize font-medium">Learn the practical science<br /> of astrology</h1>
				</div>

				<div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 place-content-center py-6">
					{ data.map((course) => (
						<CourseBox id={course.id} name={course.name} img={course.img} price={course.price} sales={course.sales} time={course.time} courses={course.courses} /> 
					))}
				</div>
				<Testimonials />
			</section>
		</section>
	)
}

export default TeamPage