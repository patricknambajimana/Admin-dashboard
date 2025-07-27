import React, { useState } from 'react'
import { Users ,Package,CircleCheckBig} from 'lucide-react';
import { TriangleAlert } from 'lucide-react';
export const Total = () => {

   const[users,setUsers]=useState([ { email:'patricknambajimana@gmail.com',username: 'Alice' }, { email:'jhondoe@gmail.com', username: 'jhon' },{ email:'aalice@gmail.com', name: 'Charlie' },]);
   const[product,setProduct]=useState([{}]);
   const[assignedproduct,setAssignedproduct]=useState([{}])
   const [unassignedproduct,setUnassignedproduct]=useState([]);

   const totaluser = users.length;
   const totalproduct = product.length;
   const totalassigned = assignedproduct.length;
   const totalunassigned = unassignedproduct.length

  return (
  <div className='flex w-full flex-cols-1 text-2xl mt-10 text-center space-x-30 '>
       <div className='flex w-70 p-5 pr-20 border border-neutral-200 rounded-md shadow-1 items-center space-x-3'>
          <Users className=' bg-primary-200  text-primary-500 rounded-md p-2  w-12 h-12' />
          <div className='grid grid-cols-1 text-left'>
         {totaluser}
         <span className='text-sm capitalize font-extralight font-roboto'>Total users</span>
         </div>
       </div>
       <div  className='flex gap-3 p-8 w-70 border border-neutral-200 rounded-md shadow-1 items-center space-x-3 '>
           <Package className=' bg-primary-200  text-primary-500 rounded-md p-2  w-12 h-12'/>
           <div className='grid grid-cols-1 text-left'>
            {totalproduct}
           <span className='text-sm capitalize font-extralight font-roboto'>total product</span>
           </div>
       </div>
       <div  className='flex gap-3 p-8 w-70 border border-neutral-200 rounded-md shadow-1 items-center space-x-3'>
        <CircleCheckBig className=' bg-green-100  text-green-600 rounded-md p-2  w-12 h-12'/>
         <div className='grid grid-cols-1 text-left'>
        {totalassigned}
        <span className='text-sm capitalize font-extralight font-roboto'>assigned products</span>
        </div>
       </div>
       <div  className='flex gap-3 p-8 w-70 border border-neutral-200 rounded-md shadow-1 items-center space-x-3'>
        <TriangleAlert className=' bg-yellow-100 font-extrabold text-yellow-600 rounded-md p-2  w-12 h-12'/>
         <div className='grid grid-cols-1 text-left'>
        {totalunassigned}
        <span className='text-sm capitalize font-extralight font-roboto'>Unassigned Products</span>
        </div>
       </div>
</div>
  )
}
