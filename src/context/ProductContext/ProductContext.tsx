import { createContext, useContext } from 'react';

import { useProductsWithParams } from '../../hooks/api/useProducts/useProducts';
import { Product } from '../../types/products';

type ProductContextType = {
  productsData: Product[] | undefined;
  isError: boolean;
  isLoading: boolean;
  totalCount: number;
};

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({
  children,
  searchParams,
}: {
  children: React.ReactNode;
  searchParams: URLSearchParams;
}) => {
  const {
    data: productsData,
    isLoading: isProductsDataLoading,
    isError: isProductsDataError,
  } = useProductsWithParams(searchParams);

  const totalCount = Number(productsData?.headers['x-total-count'] || 0);

  return (
    <ProductContext.Provider
      value={{
        isError: isProductsDataError,
        isLoading: isProductsDataLoading,
        productsData: productsData?.data,
        totalCount,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useGetProducts = () => {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error('useGetProducts must be used within a Product Provider');
  }

  return context;
};
