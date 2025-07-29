import { createContext } from "react";
import { useState } from "react";
 export const UserContext = createContext()

export const UserProvider=({children})=>{
      const[user,setUser]= useState([ 
       {email:'patricknambajimana@gmail.com',username: 'patrick nambajimana',role:'admin',status:"active" },
       { email:'jhondoe@gmail.com', username: 'jhon habakuki',role:'manager',status:"active" },
       { email:'aalice@gmail.com', username: 'Charlie jean',role:'staff',status:"active" },
        {email:'jhondoe@gmail.com', username: 'hon mariy',role:'staff' ,status:"inactive"},
         {email:'jhondoe@gmail.com', username: 'jhon tramba',role:'staff' ,status:"active"},
           
    ]);
    return(
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}