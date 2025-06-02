import { ChangeEvent, useState } from 'react';

import { searchParamsKeys } from '../../../../constants/searchParams';
import { useGetProducts } from '../../../../context/ProductContext/ProductContext';
import useHandleSearchParams from '../../../../hooks/useHandleSearchParams';
import useQueryResponseHandler from '../../../../hooks/useQueryResponseHandler';
import Pagination from '../../../common/Pagination';
import ProductItem from './ProductItem';

export const ITEMS_PER_PAGE = 5;

const ProductList = () => {
  const [itemsPerPage, setItemsPerPage] = useState(ITEMS_PER_PAGE);

  const { searchParams, handleSearchParams } = useHandleSearchParams();

  const currentPage = Number(searchParams.get(searchParamsKeys.PAGE) || 1);

  const handleChangeItemsPerPage = (e: ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(Number(e.target.value));

    handleSearchParams({
      [searchParamsKeys.LIMIT]: String(e.target.value),
      [searchParamsKeys.PAGE]: '1',
    });
  };

  const {
    productsData,
    isLoading: isProductsDataLoading,
    isError: isProductsDataError,
    totalCount,
  } = useGetProducts();

  const content = useQueryResponseHandler({
    isError: isProductsDataError,
    isLoading: isProductsDataLoading,
  });

  return (
    <div className="relative rounded-lg min-h-[50vh]">
      {content && content}

      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-10 ">
        {productsData?.map((product) => (
          <li key={product.id}>
            <ProductItem product={product} />
          </li>
        ))}
      </ul>

      {!isProductsDataLoading && (
        <Pagination
          count={totalCount}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          handleChangeItemsPerPage={handleChangeItemsPerPage}
        />
      )}
    </div>
  );
};

export default ProductList;
