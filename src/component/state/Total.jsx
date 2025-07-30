import { Users ,Package,CircleCheckBig} from 'lucide-react';
import { TriangleAlert } from 'lucide-react';
import { useProduct } from '../../hooks/useProduct';
import { useUser } from '../../hooks/useUser';
import { useTheme } from '../../hooks/useTheme';

export const Total = () => {

  const { products } = useProduct();
   const { user } = useUser(); 
  const {theme} =useTheme()

   const totalUser = user.length;
   const totalproduct = products.length;
   const totalAssigned = products.filter(product=>product.stock>0).length;
   const totalUnassigned = products.filter(product=>product.stock<=0).length;


  return (
  <div className='md:flex md:w-full w-full space-y-4 text-2xl  mt-10 md:text-center justify-between '>
       <div className={`md:flex flex md:w-70 p-8 border border-gray-300/40 ${theme === "light" ? "bg-white text-black"
                     : "bg-gray-800 text-white"
                } rounded-md shadow-1 items-center space-x-3`}>
          <Users className=' bg-primary-200  text-primary-500 rounded-md p-2  size-12' />
          <div className='grid grid-cols-1 text-left text-5xl'>
         {totalUser}
         <span className='text-sm capitalize font-extralight font-roboto'>Total users</span>
         </div>
       </div>
       <div  className={`md:flex  flex md:w-70 p-8 border border-gray-300/40 ${theme === "light" ? "bg-white text-black"
                    : "bg-gray-800 text-white"
                } rounded-md shadow-1 items-center space-x-3`}>
           <Package className=' bg-primary-200  text-primary-500 rounded-md p-2  size-12'/>
           <div className='md:grid md:grid-cols-1 text-left text-5xl'>
            {totalproduct}
           <span className='text-sm capitalize font-extralight font-roboto'>total product</span>
           </div>
       </div>
       <div  className={`flex md:w-70 p-8 border border-gray-300/40 ${theme === "light" ? "bg-white text-black"
                    : "bg-gray-800 text-white"
                }  rounded-md shadow-1 items-center space-x-3`}>
        <CircleCheckBig className=' bg-green-100  text-green-600 rounded-md p-2 size-12'/>
         <div className='grid grid-cols-1 text-left text-5xl'>
        {totalAssigned}
        <span className='text-sm capitalize font-extralight font-roboto'>assigned products</span>
        </div>
       </div>
       <div  className={`flex md:w-70 p-8 border border-gray-300/40  ${theme === "light" ? "bg-white text-black"
                    : "bg-gray-800 text-white"
                }  rounded-md shadow-1 items-center space-x-3`}>
        <TriangleAlert className=' bg-yellow-100 font-extrabold text-yellow-600 rounded-md p-2  size-12'/>
         <div className='grid grid-cols-1 text-left text-5xl'>
        {totalUnassigned}
        <span className='text-sm capitalize font-extralight font-roboto'>Unassigned Products</span>
        </div>
       </div>
       
</div>
  )
}
