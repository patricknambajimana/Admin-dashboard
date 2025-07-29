import React from 'react'
import { Moon,Settings,Bell, User} from 'lucide-react';
import {useUser} from '../hooks/useUser'
import {useTheme} from '../hooks/useTheme'
export default  function NavBar() {
 const { user} = useUser();
 const {theme,toggleTheme} = useTheme()
  return (
    <div className={`${theme === "light" ? "bg-white text-black"
                    : "bg-neutral-900 text-white"
                }`}>
        <nav className={`fixed z-5 top-0 p-4 items-center border-b-1 ${theme === "light" ? "bg-white text-black"
                    : "bg-gray-800 text-white"
                }  shadow-sm  border-gray-300/40 w-full justify-between`}>
            <div className='flex justify-between '>
                <div className='capitalize text-left md:ml-70'>
                    <h2 className='text-3xl font-roboto font-extrabold'>dashboard</h2>
                    <span className='font-light'>welcome back, admin</span>
                </div>
                <div className='md:flex md:gap-7 mr-10  hidden'> 
                <button onClick={toggleTheme} >
                  <Moon />
                  </button>
                <button> <Settings /></button>
                <button> <Bell /></button>
                <div className='md:flex md:gap-4 items-center-safe ' >
                     <h3>{user.filter((user)=>user.role==="admin").map((user)=>user.email)}</h3>
                       <User className='bg-primary-600  rounded-3xl text-white w-10 h-10 p-2 '/>
                </div>
            
                </div>
            </div>
        </nav>
    </div>
  )
}
