import React from 'react'
import { useContext } from 'react'
import { ProductsContext } from '../context/ProductsContext'


export const useProduct = () => {
    const useProducts = useContext(ProductsContext)

    if (!useProduct){
    throw new Error(" useUser must be used within a UserProvider");
  }
    return useProducts
}
