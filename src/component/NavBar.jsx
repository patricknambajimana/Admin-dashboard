import React from 'react'
import { Moon,Settings,Bell,User } from 'lucide-react';
export default  function NavBar() {
  return (
    <div>
        <nav className='fixed left-70 p-4 items-center border-b-1 shadow-sm border-b-primary-50 w-full'>
            <div className='flex justify-between '>
                <div className='capitalize text-left'>
                    <h2 className='text-3xl font-roboto font-extrabold'>dashboard</h2>
                    <span className='font-light'>welcome back, admin</span>
                </div>
                <div className='flex  mr-[30rem] gap-6 font-light'> 
                <button><Moon  /></button>
                <button> <Settings /></button>
                <button> <Bell /></button>
                <div className='flex gap-4 items-center-safe' >
                     <h3>email of admin</h3>
                       <User className='bg-primary-600  rounded-3xl text-white w-10 h-10 p-2 '/>
                </div>
                </div>
            </div>
        </nav>
    </div>
  )
}
