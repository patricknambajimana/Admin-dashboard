import React from 'react'
import { useUser } from '../hooks/useUser'
const UserList = () => {
    const {User}=useUser()
  return (
    <div className='flex  justify-between p-5 capitalize text-3xl'>
    <div>
      <h2 className='font-bold text-2xl'>Users</h2>
      <button className='bg-primary-500 p-3 text-white capitalize rounded-xl text-xl'>add user</button>
   </div>
    <div>
        <table >

            <tr>
             <th>user</th>
            <th>role</th>
            <th>status</th>
            <th>login</th>
            <th>action</th>
            </tr>
        </table>
    </div>
    </div>
  )
}

export default UserList
