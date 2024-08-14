import { Link } from 'react-router-dom';

const CourseBox = ({ id, name, img, time, courses, sales, price }) => {
  return (
    <div className="w-full md:w-2/3 flex flex-col items-center border border-8 border-silverR rounded-lg bg-white shadow-lg p-8 relative">
          <img src={img} alt="reload your browser" className="h-64 w-full object-cover rounded-lg" />
          <h3 className="text-2xl text-DarkOrange font-semibold py-4 tracking-wide">{time}</h3>
          <p className="p text-center">{name}</p>
         
         <div className="mt-4 space-y-4">
          <div>
            <p className="p font-extrabold">
              Time and Date:
            </p>
            <p className="p text-silverR font-normal">{sales}</p>
          </div>
          <div>
            <p className="p font-extrabold">
              Duration:
            </p>
            <p className="p text-silverR font-normal">
              {time}
            </p>
          </div>
          <div>
            <p className="p font-extrabold">
              Price:
            </p>
            <p className="p text-silverR font-normal">
              {price}
            </p>
          </div>
         </div>
         
         <div className="flex justify-between px-4 w-full gap-6 mt-4">
          <Link to={`/register`} className="bg-redD btn2">Register</Link>
         </div>
        </div>
  )
}

export default CourseBox