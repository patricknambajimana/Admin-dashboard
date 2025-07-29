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
      <table className='w-full'>
        <thead > 
          <tr className='bg-gray-300/20  text uppercase text-left'>
            <th className='space-y-2'>User</th>
            <th className='space-y-2'>Role</th>
            <th className='space-y-2'>Status</th>
            <th className='space-y-2'>Last Login</th>
            <th className='space-y-2'>Action</th>
          </tr>
        </thead>
        <tbody className=''>
          {user.map((user, index) => {
            let roleClass = '';
            if (user.role === 'admin') {
              roleClass = 'text-green-300 text-bg-red';
            } else if (user.role === 'manager') {
              roleClass = 'text-blue-500 ';
            }
            

            const statusClass = user.status === 'active' ? 'text-green-500 ' : 
            'text-red-500 ';

            return (
              <tr key={index} className="text-left  border-b border-gray-600/20">
                <td className='flex items-center justify-start
                gap-2'>
                  <User className='size-10 bg-neutral-200 rounded-full px-2' />
                  <span className='flex flex-col gap-2 items-start'>
                    <h2 className='text-xl font-bold capitalize px-2'>{user.username}</h2>
                    <h2 className='text-1xl font-light capitalize px-2'>{user.email}</h2>
                  </span>
                  </td>
                <td className={`capitalize py-3 px-4 ${roleClass}`}>{user.role}</td>
                <td className={`capitalize py-3 px-4 ${statusClass}`}>{user.status}</td>
                <td className='py-3 px-4'>{user.lastlogin}</td>
                <td className='py-3 px-4'>
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
  );
};

export default UserList;
