import React from 'react'
import { SectionB } from '../components'


const BookingPage = () => {
	return (
		<section className="w-full flex items-center flex-col space-y-16">
			<div className="flex items-center flex-col w-1/2">
				<div className="mb-2">
					<h1 className="text-secondary text-[4.5rem] font-serif font-semibold">Booking</h1>
				</div>
				<div className="max-w-prose text-center">
					<p className="">
						Learn from our experts readers and be guided on your transformative<br /> journey of self-discovery through the powerful wisdom of astrology.
					</p>
				</div>
			</div>

			<div className="w-full">
				<form className="mt-4 px-2 max-w-7xl mx-auto w-full" method="post">
          <div className="flex justify-around w-full -mb-4">
          
            <div className="input-con md:w-[45%]">
            <label htmlFor="first_name">First Name</label>
              <input type="text" 
                     name="first_name"
                     id="first_name"
                     className="auth-field"
                     placeholder="Enter Your First Name"
                     required />
            </div>
            
            <div className="input-con md:w-[45%]">
            <label htmlFor="last_name">Last Name</label>
              <input type="text" 
                     name="last_name"
                     id="last_name"
                     className="auth-field"
                     placeholder="Enter Your Last Name"
                     required />
            </div>
          </div>

          <div className="flex justify-around w-full mt-4">
          
            <div className="input-con md:w-[45%]">
            <label htmlFor="first_name">Your Phone</label>
              <input type="text" 
                     name="first_name"
                     id="first_name"
                     className="auth-field"
                     placeholder="+44 3737 838xx"
                     required />
            </div>
            
            <div className="input-con md:w-[45%]">
            <label htmlFor="last_name">Your Email</label>
              <input type="text" 
                     name="last_name"
                     id="last_name"
                     className="auth-field"
                     placeholder="youremail@domain.com"
                     required />
            </div>
          </div>

          <div className="flex justify-around w-full -mb-4">
          
            <div className="input-con md:w-[45%]">
            <label htmlFor="first_name">Services</label>
              <div class="select">
                    <select id="network" onchange="" class="border-none outline-none w-full bg-transparent">
                        <option>Choose Services</option>
                    </select>
                </div>
            </div>
            
            <div className="input-con md:w-[45%]">
            <label htmlFor="last_name">Date</label>
              <input type="date" 
                     name="last_name"
                     id="last_name"
                     className="auth-field"
                     placeholder="Enter Your Last Name"
                     required />
            </div>
          </div>

          <div className="flex justify-around w-full mt-4">
          
            <div className="input-con w-[95%]">
            <label htmlFor="first_name">Message (optional)</label>
              <textarea
              className="w-full h-28 p-4 text-sm border border-primary outline-none rounded-xl text-primary bg-transparent autofill:bg-transparent placeholder-primary mb-5"
              placeholder="Your Message"
              name="message"
              id="message"
              ></textarea>
            </div>
          </div>
          
          <div className="px-4 text-center">
            <button type="submit" className="bg-secondary w-[10rem] h-10 px-2 flex items-center justify-center rounded-lg hover:opacity-80">Book Now</button>
          </div>
          
         </form>
		</div>

		<SectionB />
		</section>
	)
}

export default BookingPage