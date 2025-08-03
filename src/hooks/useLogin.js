import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

export const useLogin=()=>{
    const login = useContext(LoginContext)

    if(!login){
        throw new Error('Acceess denied')
    }
      return login
}
