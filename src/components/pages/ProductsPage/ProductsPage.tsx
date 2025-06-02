import { useEffect, useState } from 'react';

import { CircleX } from 'lucide-react';

import { searchParamsKeys } from '../../../constants/searchParams';
import { ProductProvider } from '../../../context/ProductContext/ProductContext';
import useDebounce from '../../../hooks/useDebounce';
import useHandleSearchParams from '../../../hooks/useHandleSearchParams';
import SideBar from '../../layout/SideBar';
import ProductList from './ProductList';
import { ITEMS_PER_PAGE } from './ProductList/ProductList';

const ProductsPage = () => {
  const [query, setQuery] = useState('');
  const debouncedValue = useDebounce(query);

  const { searchParams, handleSearchParams } = useHandleSearchParams({
    [searchParamsKeys.LIMIT]: String(ITEMS_PER_PAGE),
  });

  const queryParam = searchParams.get(searchParamsKeys.Q) || '';

  const handleClearInput = () => {
    setQuery('');
    handleSearchParams({
      [searchParamsKeys.Q]: null,
    });
  };

  useEffect(() => {
    if (queryParam.length) {
      setQuery(queryParam);
    }
  }, []);

  useEffect(() => {
    handleSearchParams({
      [searchParamsKeys.Q]: debouncedValue.length ? debouncedValue : null,
    });
  }, [debouncedValue]);

  return (
    <ProductProvider searchParams={searchParams}>
      <SideBar />

      <section className="col-start-1 col-end-5 sm:col-start-3 sm:col-end-7 md:col-end-9 lg:col-start-4 lg:col-end-13 bg-background-primary rounded-lg px-4 py-2">
        <div className="relative mb-8">
          <h2 className="text-text-primary font-[700] text-2xl text-center ">
            Product list
          </h2>

          <div className="absolute right-0 top-1/2 -translate-y-1/2">
            <label htmlFor="query"></label>
            <input
              name="query"
              id="query"
              type="text"
              placeholder="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="border border-gray-300 rounded-xl px-3 w-24 lg:w-48 py-1  focus:ring-gray-300 focus:ring-1 focus:outline-none pr-6"
            />

            {!!query.length && (
              <button
                className="absolute right-1 top-1/2 -translate-y-1/2"
                onClick={handleClearInput}
              >
                <CircleX className="w-4 h-4 text-gray-500" />
              </button>
            )}
          </div>
        </div>

        <ProductList />
      </section>
    </ProductProvider>
  );
};

export default ProductsPage;
