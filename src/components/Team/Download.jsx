import React from 'react'

const Download = () => {
	return (
		<section className="download relative mt-[14rem]">
			<div className="flex">
				<div className="border-r border-r-black h-[10rem] flex items-center px-2">
					<button className="bg-white w-44 border border-gray-100 h-12 p-3 rounded-xl flex items-center">
						<div className="logo"><i className="pi pi-apple text-left text-3xl"></i></div>
						<div className="flex flex-col">
							<p className="text-[10px] text-left">Get it on</p>
							<h2 className="">App store</h2>
						</div>
					</button>
				</div>
				<div className="border-l border-l-black h-[10rem] flex items-center px-2">
					<button className="bg-white w-44 border border-gray-100 h-12 py-3 px-3 rounded-xl flex items-center">
						<div className="logo"><i className="pi pi-play-circle text-left text-3xl"></i></div>
						<div className="flex flex-col">
							<p className="text-[10px] text-left">Get it on</p>
							<h2 className="">App store</h2>
						</div>
					</button>
				</div>
			</div>
		</section>
	)
}

export default Download
