import React from 'react'
import { CircleCheckBig,Package } from 'lucide-react';
import { Total } from './state/Total';
 const Dashboard =()=> {
  return (
    <div className='relative ml-80 mr-30 top-30 items-center text-center justify-between'>
        <div className='bg-primary-500 w-full rounded-2xl'>
            <div className='flex gap-2 p-5'>
            <Package  className=' bg-primary-400  text-white rounded-md p-2  w-12 h-12'/>
            <h2 className='text-white text-3xl font-roboto uppercase'><span className='lowercase'>i</span>huza inventory<span className='capitalize text-2xl'span>-sytem overview</span></h2>
            </div>
            <div className='grid grid-rows-2 text-left pl-20 pb-10'>
            <span className='capitalize text-1xl text-white'>monitor your <span  className='lowercase'>i</span><span className='uppercase text-1xl'>huza</span> inventory and product assignment in real-time.</span>
            <span className='flex gap-1 capitalize text-white pt-3'><CircleCheckBig className='text-green-300'/>all system operational</span>
            </div>
        </div>
        <div className='text-left'>
            <Total/>
        </div>
    </div>
  )
}
export default Dashboard