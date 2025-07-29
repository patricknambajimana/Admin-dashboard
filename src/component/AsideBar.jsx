import React from 'react'
import { Package,Laptop,Users,AlignCenter,Layers,LogOut, User} from 'lucide-react';
import { useProduct } from '../hooks/useProduct';
import { useUser } from '../hooks/useUser';
import { useTheme } from '../hooks/useTheme';
const AsideBar = () => {
    const {products} = useProduct()
    const { user } = useUser();
    const {theme} =useTheme(); 


    const totalUser = user.length;
   const totalproduct = products.length;
   const totalAssigned = products.filter(product=>product.stock>0).length;

  return (
    <div className={`md:w-70 md:h-screen ${theme === "light" ? "bg-white text-black"
                    : "bg-gray-800 text-white"
                } border-r border-gray-800/40 md:fixed z-10`}>
        <div className='grid grid-cols-1 gap-4'>
            <div className='flex uppercase gap-2 p-5'>
                 <Package  className=' bg-primary-500  text-white rounded-md p-2  size-12'/>
                <div >
                    <h2 className='text-3xl font-roboto uppercase font-bold'><span className='lowercase'>i</span>huza </h2>
                     <span className='font-extralight text-1xl'>inventory</span>
                </div>
            </div>
       <div className='grid grid-cols-1 pl-10 capitalize text-xl '>
        <div className='flex gap-2 space-y-2 hover:text-primary-500 hover:bg-primary-200/30 mr-10 p-3 rounded-md'>
            <Laptop className='size-7'/>
           <a href="">dashboard</a>
        </div>
        <div className='flex gap-2 space-y-2 hover:text-primary-500 hover:bg-primary-200/30 mr-10 p-3 rounded-md'>
            <Users className='size-7'/>
          <a href="">users</a>
          <span className='ml-10 bg-gray-400 text-xl rounded-full'>{totalUser}</span>
        </div>
        <div className='flex gap-2 space-y-2 hover:text-primary-500 hover:bg-primary-200/30 mr-10 p-3 rounded-md'>
            <Package className='size-7'/>
            <a href="">products</a>
            <span className='ml-10 bg-gray-400 text-xl rounded-full'>{totalproduct}</span>
        </div>
        <div className='flex gap-2 space-y-2 hover:text-primary-500 hover:bg-primary-200/30 mr-10 p-3 rounded-md'>
            <AlignCenter className='size-7'/>
            <a href="">assignment</a>
            <span className='ml-10 bg-gray-400 text-xl rounded-full'>{totalAssigned}</span>
        </div>
        <div className='flex gap-2 space-y-2 hover:text-primary-500 hover:bg-primary-200/30 mr-10 p-3 rounded-md'>
            <Layers className="size-7"/>
        <a href="">categories</a>
        </div>
        
       </div>
        <div className='mt-[20rem] p-3'>
            <button className='flex text-2xl capitalize '>
                <LogOut  className='size-8'/>
                logout
            </button>
        </div>
        </div>
    </div>
  )
}

export default AsideBar
