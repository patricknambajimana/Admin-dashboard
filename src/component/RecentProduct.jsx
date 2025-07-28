import React from 'react'
import { useProduct } from '.../../../hooks/useProduct';
export const RecentProduct = () => {
const { products } = useProduct();
 const getStatus = products.status ==="instock"?"text-green-200":""


  return (

   <div className='grid grid-cols-3 gap-3 p-10 '>
    {products.map((product)=>(
      <>
    <div className='border border-neutral-200  rounded-2xl p-4'>
    <div className='flex justify-between text-left'>
     <p className='text-2xl'>{product.name}</p>
      
      <span >{getStatus}</span>
      </div>
      <div className='grid pt-4 text-left'>
      <h3>{product.category}</h3>
      <p className='capitalize'>{product.date}</p>
     </div>
     </div>
</>
    ))}
   </div>
  )
}
