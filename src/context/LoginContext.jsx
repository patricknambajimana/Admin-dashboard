import React, { createContext, useEffect, useState } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [userrole, setUserrole] = useState(null);
  
      useEffect(()=>{
        const saveUser = JSON.parse("role",localStorage.getItem(userrole))

       if(role="admin"){
         setUserrole(saveUser)
       }
       if(role="user"){
        setUserrole(saveUser)
       }
  },[])

  return (
    <LoginContext.Provider value={{ userrole, setUserrole}}>
      {children}
    </LoginContext.Provider>
  );
};
