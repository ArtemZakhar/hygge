import { apiPaths } from '../constants/apiPaths';
import { Product } from '../types/products';
import axiosInstance from '../utilities/axiosInstance';
import { getSearchParamsObject } from '../utilities/searchHelper';

export const getAllProducts = async (query?: URLSearchParams) => {
  const params = getSearchParamsObject(query);

  return await axiosInstance.get<Product[]>(apiPaths.products, { params });
};
