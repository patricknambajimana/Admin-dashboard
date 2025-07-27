import React from 'react'
import { Package,Laptop,Users,AlignCenter,Layers,LogOut} from 'lucide-react';
const AsideBar = () => {


  return (
    <div className="w-70 h-screen border-r border-primary-50 shadow grid grid-cols-1 md:gap-100  divide-amber-50 fixed">
        <div className="grid  gap-1 p-7">
            <div className='flex uppercase gap-3'>
                 <Package  className=' bg-primary-500  text-white rounded-md p-2  w-12 h-12'/>
                <div >
                    <h2 className='text-3xl font-roboto uppercase font-bold'><span className='lowercase'>i</span>huza </h2>
                     <span className='font-extralight text-1xl'>inventory</span>
                </div>
            </div>
       
        <div className=''>
            <ul className='capitalize mt-5'>
                <li ><a href="" className='flex text-1xl font-extrabold hover:bg-primary-50 hover:text-primary-600 p-4 rounded-md'> <Laptop />dashboard</a></li>
                <li> <a href="" className='flex text-1xl font-extrabold hover:bg-primary-50 hover:text-primary-600 p-4 rounded-md'> <Users />users</a></li>
                <li><a href="" className='flex text-1xl font-extrabold  hover:bg-primary-50 hover:text-primary-600 p-4 rounded-md'><Package/>product</a></li>
                <li><a href="" className='flex text-1xl font-extrabold hover:bg-primary-50 hover:text-primary-600 p-4 rounded-md'> <AlignCenter />assignment</a></li>
                 <li><a href="" className='flex text-1xl font-extrabold hover:bg-primary-50 hover:text-primary-600 p-4 rounded-md'> <Layers />category</a></li>
            </ul>
       </div>
        </div>
        <div>
            <button>  <LogOut />logout</button>
        </div>
    </div>
  )
}

export default AsideBar
