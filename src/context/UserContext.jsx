import { createContext } from "react";
import { useState } from "react";
 export const UserContext = createContext()

export const UserProvider=({children})=>{
      const[User,setUser]= useState([ 
       {email:'patricknambajimana@gmail.com',username: 'Alice',role:'admin' },
       { email:'jhondoe@gmail.com', username: 'jhon',role:'user' },
       { email:'aalice@gmail.com', name: 'Charlie' },
        {email:'jhondoe@gmail.com', username: 'jhon' },
         {email:'jhondoe@gmail.com', username: 'jhon' },
           
    ]);
    return(
        <UserContext.Provider value={{User,setUser}}>
            {children}
        </UserContext.Provider>
    )
}