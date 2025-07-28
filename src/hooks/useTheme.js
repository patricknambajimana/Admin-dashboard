import React from 'react'
import { useContext } from 'react'
import { themeContext } from '../context/ThemeContext'

export const useTheme =()=>{
    const theme =useContext(themeContext)

    if(!theme){
        throw new Error ("this is not theme ")
    }
    return theme
}


