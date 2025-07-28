import React from 'react'
import { useProduct } from '.../../../hooks/useProduct';

export const RecentProduct = () => {
  const {products}=useProduct()
   
  
  const getProduct = (stock) => {
    if (stock <= 0) return "outofstock"
    if (stock <= 5) return "low stock"
    return "instock"
  };
  const OrderProduct=[...products].sort()

  return (
    <div className='flex w-70 p-5 pr-20 border border-neutral-200 rounded-md shadow-1 items-center space-x-3'>
      {OrderProduct.map((product)=>{
       const status = getProduct(product.stock)

       return <div>
        <h3 className="">{product.name}</h3>
         <span>{product.category}</span>
          <span>{new Date(product.date).toLocaleDateString()}</span>
       </div>
    })}</div>
  )
}
