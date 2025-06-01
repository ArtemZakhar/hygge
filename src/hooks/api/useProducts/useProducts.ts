import { useQuery } from '@tanstack/react-query';

import { getAllProducts } from '../../../services/productService';

const QUERY_KEY = 'products';

export const useProductsWithParams = (searchParams: URLSearchParams) =>
  useQuery({
    queryKey: [searchParams.toString()],
    queryFn: () => getAllProducts(searchParams),
  });

export const useAllProducts = () =>
  useQuery({ queryKey: [QUERY_KEY], queryFn: () => getAllProducts() });
