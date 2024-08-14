import React from 'react'

const MemberPage = () => {
	return (
		<section className="w-full flex items-center flex-col space-y-16">
			<div className="w-full flex flex-col md:flex-row gap-9">
				<div className="w-full md:w-[45%]">
					<div className="flex items-center flex-col">
				<div className="mb-2">
					<h1 className="text-secondary text-[4.2rem] font-serif font-semibold text-left uppercase">Become a member</h1>
				</div>
				<div className="text-left">
					<p className="text-left">
						Learn from our experts readers and be guided on your transformative<br /> journey of self-discovery through the powerful wisdom of astrology.
					</p>
				</div>
				</div>
				</div>
				<div className="w-full md:w-[60%] border h-auto flex items-center px-5 py-4 border-secondary rounded-xl md:translate-y-5 bg-primary">
					
				</div>
			</div>
		</section>
	)
}

export default MemberPage