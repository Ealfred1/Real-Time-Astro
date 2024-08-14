import React from 'react'
import data from '../../data/teamData2.json'


const Testimonials = () => {
	return (
		<section className="w-full px-2 flex flex-col items-center justify-center pt-32">
			<div className="flex items-center justify-center text-center">
				<h2 className="uppercase text-7xl">What our clients<br /> say about us</h2>
			</div>

			<div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 place-content-center py-6">
				{ data.map((user) => (
					<div className="w-[30%] h-auto bg-[#0a0f14] flex flex-col items-center rounded-xl p-6 relative text-neutrall">
						
						<div className="">
							<p className="">{user.text}</p>
						</div>

						<div className="w-full flex flex-col items-center justify-around">
							
						</div>

					</div>
				))}
			</div>
		</section>
	)
}

export default Testimonials