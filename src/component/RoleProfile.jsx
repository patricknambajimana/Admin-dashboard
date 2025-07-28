import React from 'react'
import { useUser } from '../hooks/useUser'


export const RoleProfile = () => {
  const [user,setUser] = useUser()
  setUser((prev)=>prev+1)
  return (
    <div>
        <h3>{user.email}</h3>
        
    </div>
  )
}
