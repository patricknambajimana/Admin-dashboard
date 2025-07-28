import { createContext } from "react";
import { useState } from "react";
 export const UserContext = createContext()

export const UserProvider=({children})=>{
      const[user,setUser]= useState([ 
       {email:'patricknambajimana@gmail.com',username: 'Alice',role:'admin' },
       { email:'jhondoe@gmail.com', username: 'jhon',role:'user' },
       { email:'aalice@gmail.com', name: 'Charlie',role:'user' },
        {email:'jhondoe@gmail.com', username: 'jhon',role:'user' },
         {email:'jhondoe@gmail.com', username: 'jhon',role:'user' },
           
    ]);
    return(
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}