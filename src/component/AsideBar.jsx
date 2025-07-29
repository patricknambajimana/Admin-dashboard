import React from 'react'
import { Package,Laptop,Users,AlignCenter,Layers,LogOut} from 'lucide-react';
import { useProduct } from '../hooks/useProduct';
import { useUser } from '../hooks/useUser';
const AsideBar = () => {
    const {products} = useProduct()
    const { user } = useUser(); 


    const totalUser = user.length;
   const totalproduct = products.length;
   const totalAssigned = products.filter(product=>product.stock>0).length;
   const totalUnassigned = products.filter(product=>product.stock<=0).length;

  return (
    <div className="w-70 h-screen border-r-1 shadow-sm border-neutral-100 grid grid-cols-1 gap-80 fixed bg-white z-10">
        <div className="grid  gap-1 p-7">
            <div className='flex uppercase gap-3'>
                 <Package  className=' bg-primary-500  text-white rounded-md p-2  w-12 h-12'/>
                <div >
                    <h2 className='text-3xl font-roboto uppercase font-bold'><span className='lowercase'>i</span>huza </h2>
                     <span className='font-extralight text-1xl'>inventory</span>
                </div>
            </div>
       
            <ul className='capitalize mt-5'>
                <li ><a href="" className='flex text-1xl font-extrabold hover:bg-primary-50 hover:text-primary-600 p-4 rounded-md'> <Laptop />dashboard</a></li>
                <li> <a href="" className='flex  text-1xl font-extrabold hover:bg-primary-50 hover:text-primary-600 p-4 rounded-md'> <Users />users
                 <span className='bg-neutral-200 flex ml-15'>{totalUser}</span></a></li>
                <li><a href="" className='flex text-1xl font-extrabold  hover:bg-primary-50 hover:text-primary-600 p-4 rounded-md'><Package/>products
                 <span>{totalproduct}</span></a></li>
                <li><a href="" className='flex text-1xl font-extrabold hover:bg-primary-50 hover:text-primary-600 p-4 rounded-md'> <AlignCenter />assignment 
                <span>{totalAssigned}</span></a></li>
                 <li><a href="" className='flex text-1xl font-extrabold hover:bg-primary-50 hover:text-primary-600 p-4 rounded-md'> <Layers />category </a></li>
            </ul>
        </div>
        <div>
            <button className='ml-10 flex text-2xl gap-3 capitalize'>  <LogOut  className='size-8'/>logout</button>
        </div>
    </div>
  )
}

export default AsideBar
