import React from 'react'
import { useUser } from '../hooks/useUser'
const UserList = () => {
    const {User}=useUser()
  return (
    <>
    <div >
    <div className='flex  justify-between p-4 capitalize text-3xl'>
      <h2 className='font-bold text-2xl'>Users</h2>
      <button className='bg-primary-500 p-3 text-white capitalize rounded-xl text-xl'>add user</button>
    </div>
    <div className='flex flex-rows '>
    {User.map((user)=>(
      <div>
        {user.email}
      <div>{user.role}</div>
      <div>{user.status}</div>
        <div>login</div>
        <div>
          <button>edit</button>
          <button>delete</button>
        </div>
        </div>
    ))}
    </div>
   </div>
   </>
  )
}

export default UserList
