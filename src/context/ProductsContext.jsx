import React, { createContext,useState } from 'react';

export const ProductsContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'iPhone 15 Pro',
      date: 'dec 10-2026',
      category: 'Electronics',
      stock: 20,
      status:'instock'
    },
    {
      id: 2,
      name: 'Nike Air Max',
      date: 'april 7-2025',
      category: 'Shoes',
      stock: 0,
      status:'Outstock'
    },
    {
      id: 3,
      name: 'Samsung Monitor',
      date: 'april 7-2025',
      category: 'Accessories',
      stock: 3,
      status:'lowStock'
    },
    {
      id: 3,
      name: 'Samsung Monitor',
      date: 'april 7-2025',
      category: 'Accessories',
      stock: 3,
      status:'lowStock'
    },
  ]);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

