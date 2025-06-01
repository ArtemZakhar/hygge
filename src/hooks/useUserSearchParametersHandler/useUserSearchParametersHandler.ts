import { useEffect, useState } from 'react';

import { PriceRange } from '../../types/products';
import { useAllProducts } from '../api/useProducts';

const useUserSearchParametersHandler = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [price, setPrice] = useState<PriceRange>({
    min: 0,
    max: 0,
  });
  const [hasSubscription, setHasSubscription] = useState(false);

  const { data: productsData, isError, isLoading } = useAllProducts();

  useEffect(() => {
    if (productsData) {
      const setOfTags = new Set<string>();
      let minPrice = Infinity;
      let maxPrice = -Infinity;

      for (const product of productsData?.data || []) {
        for (const tag of product.tags) {
          setOfTags.add(tag);
        }

        minPrice = Math.min(minPrice, product.price);
        maxPrice = Math.max(maxPrice, product.price);

        if (product.subscription) {
          setHasSubscription(true);
        }
      }

      setTags(Array.from(setOfTags));
      setPrice({ min: minPrice, max: maxPrice });
    }
  }, [productsData]);

  return { tags, isError, isLoading, hasSubscription, price };
};

export default useUserSearchParametersHandler;
