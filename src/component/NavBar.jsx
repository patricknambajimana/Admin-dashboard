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
        <nav className={`fixed z-5 top-0 md:p-4 p-1 items-center border-b-1 ${theme === "light" ? "bg-white text-black"
                    : "bg-gray-800 text-white"
                }  shadow-sm  border-gray-300/40 w-full justify-between`}>
            <div className='flex justify-between '>
                <div className='capitalize text-left md:ml-70 ml-2'>
                    <h2 className='md:text-3xl text-sm font-roboto font-extrabold'>dashboard</h2>
                    <span className='md:font-light text-sm'>welcome back, admin</span>
                </div>
                <div className='md:flex md:gap-7  md:mr-10 mr-2 flex gap-2'> 
                <button onClick={toggleTheme} >
                  <Moon />
                  </button>
                <button> <Settings /></button>
                <button> <Bell /></button>
                <div className='md:flex md:gap-4 md:items-center-safe ' >
                     <h3 className='md:flex sm:flex sm:gap-3 hidden'>{user.filter((user)=>user.role==="admin").map((user)=>user.email)}</h3>
                       <User className='bg-primary-600  rounded-3xl text-white w-10 h-10 p-2'/>
                </div>
            
                </div>
            </div>
        </nav>
    </div>
  )
}
