import React from 'react';
import { useProduct } from '.../../../hooks/useProduct';

export const RecentProduct = () => {
  const { products } = useProduct();

  const getStatusClasses = (status) => {
    switch (status) {
      case 'in stock':
        return 'text-green-700 bg-green-100';
      case 'out of stock':
        return 'text-red-700 bg-red-100';
      case 'low stock':
        return 'text-yellow-700 bg-yellow-100';
      default:
        return 'text-gray-500 bg-gray-100';
    }
  };

  return (
    <div className="grid grid-cols-3 gap-3 p-10">
      {products.map((product, index) => (
        <div key={index} className="border border-neutral-200 rounded-2xl p-4">
          <div className="flex justify-between text-left">
            <p className="text-2xl">{product.name}</p>
            <span
              className={`px-2 py-1 rounded-md text-sm font-semibold ${getStatusClasses(product.status)}`}
            >
              {product.status}
            </span>
          </div>
          <div className="grid pt-4 text-left">
            <h3>{product.category}</h3>
            <p className="capitalize">{product.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
