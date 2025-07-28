// ProductContext.js
import React, { createContext,useState } from 'react';

export const ProductsContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'iPhone 15 Pro',
      date: '2025-07-26',
      category: 'Electronics',
      stock: 20,
    },
    {
      id: 2,
      name: 'Nike Air Max',
      date: '2025-07-25',
      category: 'Shoes',
      stock: 0,
    },
    {
      id: 3,
      name: 'Samsung Monitor',
      date: '2025-07-24',
      category: 'Accessories',
      stock: 3,
    },
  ]);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

