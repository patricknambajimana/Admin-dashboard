import React from 'react'
import { Moon,Settings,Bell, User} from 'lucide-react';
import {useUser} from '../hooks/useUser'


export default  function NavBar() {
 const { user} = useUser(); 
  return (
    <div>
        <nav className='fixed z-5 top-0 p-4 items-center border-b-1 bg-white  shadow-sm border-b-primary-50 w-full justify-between'>
            <div className='flex justify-between '>
                <div className='capitalize text-left ml-70'>
                    <h2 className='text-3xl font-roboto font-extrabold'>dashboard</h2>
                    <span className='font-light'>welcome back, admin</span>
                </div>
                <div className='flex gap-7 mr-10'> 
                <button><Moon  /></button>
                <button> <Settings /></button>
                <button> <Bell /></button>
                <div className='flex gap-4 items-center-safe ' >
                     <h3>{user.filter((user)=>user.role==="admin").map((user)=>user.email)}</h3>
                       <User className='bg-primary-600  rounded-3xl text-white w-10 h-10 p-2 '/>
                </div>
                </div>
            </div>
        </nav>
    </div>
  )
}
