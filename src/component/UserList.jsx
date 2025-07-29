import React from 'react';
import { useUser } from '../hooks/useUser';
import { User } from 'lucide-react';
const UserList = () => {
  const { user } = useUser(); 

  return (
    <div className="pt-4">
      <table className="border-neutral-200 w-full  text-left ">
        <thead>
          <tr className="text-1xl capitalize bg-gray-100">
            <th>User</th>
            <th>Role</th>
            <th>Status</th>
            <th>Last Login</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className='text-left '>
          {user.map((user, index) => {
            let roleClass = '';
            if (user.role === 'admin') {
              roleClass = 'text-green-300';
            } else if (user.role === 'manager') {
              roleClass = 'text-blue-500 ';
            }
            

            const statusClass = user.status === 'active' ? 'text-green-500 ' : 
            'text-red-500 ';

            return (
              <tr key={index} className=" border-t border-neutral-200 text-left text-sm ">
                <td className=''>
                  <User className='size-10 bg-neutral-200 rounded-full' />
                  <h2 className='text-xl font-bold capitalize'>{user.username}</h2>{user.email}</td>
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
