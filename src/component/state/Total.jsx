import { Users ,Package,CircleCheckBig} from 'lucide-react';
import { TriangleAlert } from 'lucide-react';
import { useProduct } from '../../hooks/useProduct';
import { useUser } from '../../hooks/useUser';


export const Total = () => {
 
  const { products } = useProduct();
  const { User } = useUser(); 

   const totalUser = User.length;
   const totalproduct = products.length;
   const totalAssigned = products.filter(product=>product.stock>0).length;
   const totalUnassigned = products.filter(product=>product.stock<=0).length;


  return (
  <div className='flex w-full flex-cols-1 text-2xl mt-10 text-center space-x-30 '>
       <div className='flex w-70 p-5 pr-20 border border-neutral-200 rounded-md shadow-1 items-center space-x-3'>
          <Users className=' bg-primary-200  text-primary-500 rounded-md p-2  w-12 h-12' />
          <div className='grid grid-cols-1 text-left'>
         {totalUser}
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
        {totalAssigned}
        <span className='text-sm capitalize font-extralight font-roboto'>assigned products</span>
        </div>
       </div>
       <div  className='flex gap-3 p-8 w-70 border border-neutral-200 rounded-md shadow-1 items-center space-x-3'>
        <TriangleAlert className=' bg-yellow-100 font-extrabold text-yellow-600 rounded-md p-2  w-12 h-12'/>
         <div className='grid grid-cols-1 text-left'>
        {totalUnassigned}
        <span className='text-sm capitalize font-extralight font-roboto'>Unassigned Products</span>
        </div>
       </div>
       
</div>
  )
}
