import React from 'react'
import { useContext } from 'react'
import {ThemeContext} from "../context/ThemeContext"


export const useTheme =()=>{
    const theme =useContext(ThemeContext)

    if(!theme){
        throw new Error ("this is not theme ")
    }
    return theme
}


