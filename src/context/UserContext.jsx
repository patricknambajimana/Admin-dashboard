import { createContext, useEffect } from "react";
import { useState } from "react";
 export const UserContext = createContext()

export const UserProvider=({children})=>{
      const[User,setUser]= useState([ 
       {email:'patricknambajimana@gmail.com',username: 'patrick nambajimana',role:'admin',status:"active" ,lastlogin:"2 minutes ago"},
       { email:'jhondoe@gmail.com', username: 'jhon habakuki',role:'manager',status:"active",lastlogin:"5 minutes ago"},
       { email:'aalice@gmail.com', username: 'Charlie jean',role:'staff',status:"active",lastlogin:"5 minutes ago"},
        {email:'jhondoe@gmail.com', username: 'hon mariy',role:'staff' ,status:"inactive",lastlogin:"20 minutes ago"},
         {email:'jhondoe@gmail.com', username: 'jhon tramba',role:'staff' ,status:"active",lastlogin:"2 minutes ago"},
           
    ]);

    return(
        <UserContext.Provider value={{User,setUser}}>
            {children}
        </UserContext.Provider>
    )
}