import React from 'react';
import { useUser } from '../hooks/useUser';
import { User } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
const UserList = () => {
  const { user } = useUser();
  const {theme} = useTheme() 

  return (
    <div className={`${theme === "light" ? "bg-white text-black"
                    : "bg-gray-800 text-white"
                }` }>
                  <div className='overflow-x-auto'>
          <table className='w-full table-wrapper rounded-md p-3'>
     
        <thead > 
          <tr className='bg-gray-300/20  text uppercase text-left whitespace-nowrap'>
            <th className='w-20 p-5'>User</th>
            <th className='w-20 '>Role</th>
            <th className=' w-20 '>Status</th>
            <th className='w-20'>Last Login</th>
            <th className='w-20'>Action</th>
          </tr>
        </thead>
        <tbody className='divide-y'>
          {user.map((user, index) => {
            let roleClass = '';
            if (user.role === 'admin') {
              roleClass = 'text-purple-600  bg-purple-600/20 rounded-full';
            } else if (user.role === 'manager') {
              roleClass = 'text-blue-400 bg-blue-400/20 rounded-full';
            }
            else{
              roleClass = 'text-gray-500 bg-gray-300/30 rounded-full'
            }
            

            const statusClass = user.status === 'active' ? 'text-green-500 bg-green-700/20 rounded-full' : 
            'text-red-400 bg-red-400/20 rounded-full';

            return (
              <tr key={index} className="text-left  border-b border-gray-600/20">
                <td className='flex items-center justify-start gap-2 p-3 whitespace-nowrap'>
                  <User className='size-10 bg-neutral-200 rounded-full px-2' />
                  <span className='flex flex-col gap-2 items-start'>
                    <h2 className='text-xl font-bold capitalize px-2'>{user.username}</h2>
                    <h2 className='text-1xl font-light capitalize px-2'>{user.email}</h2>
                  </span>
                  </td>
                <td className='capitalize whitespace-nowrap'>
                  <span className={`p-2 ${roleClass}`}>{user.role}</span>
                  </td>
                <td className='capitalize whitespace-nowrap'>
                  <span className={`p-2 ${statusClass}`}>{user.status}</span> </td>
                <td className='text-sm font-extralight'>
                  <span className='text-sm font-light p-2'>{user.lastlogin}</span></td>
                <td className=' p-2 whitespace-nowrap'>
                  <button className="capitalize mr-3 text-primary-600 font-extrabold">
                    Edit
                  </button>
                  <button className="capitalize text-red-600 font-extrabold">
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default UserList;
