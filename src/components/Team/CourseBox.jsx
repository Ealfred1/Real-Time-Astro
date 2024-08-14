import { Link } from 'react-router-dom';

const CourseBox = ({ id, name, img, time, courses, sales, price }) => {
  return (
    <div className="w-[30%] h-auto flex flex-col items-center rounded-xl bg-white p-2 relative">
          <img src={img} alt="reload your browser" className="h-64 w-full object-cover rounded-xl" />

          <div className="w-full text-secondary text-right p-2">
            <i className="pi pi-star-fill"></i>
            <i className="pi pi-star-fill"></i>
            <i className="pi pi-star-fill"></i>
            <i className="pi pi-star-fill"></i>
            <i className="pi pi-star-fill"></i>
          </div>
         
         <div className="mt-1 space-y-1 w-full px-2">
            <h2 className="text-lg">{name}</h2>
            <p className="text-xs text-secondary">{price}</p>
         </div>

         <div className="border-t border-t-gray-200 w-full h-auto mt-2 flex py-3 gap-3 items-center">
           <p className="text-[13px]"><i className="pi pi-clock"></i> {time}</p>
           <p className="text-[13px]"><i className="pi pi-video"></i> {courses}</p>
           <p className="text-[13px]"><i className="pi pi-download"></i> {sales}</p>
         </div>

         <div className="w-full flex items-center justify-center translate-y-5">
           <Link className="bg-secondary w-[10rem] h-10 px-2 flex items-center justify-center rounded-3xl hover:opacity-80">Join Course</Link>
         </div>

      </div>
  )
}

export default CourseBox