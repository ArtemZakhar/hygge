import { ChangeEvent, useEffect, useState } from 'react';

import { CircleX } from 'lucide-react';

import { searchParamsKeys } from '../../../../../constants/searchParams';
import useDebounce from '../../../../../hooks/useDebounce';
import { PriceRange } from '../../../../../types/products';
import { SearchParams } from '../../../../../types/searchParams';
import BlockWrapper from '../BlockWrapper';

const PriceSearcher = ({
  price,
  priceParam,
  handleSearchParams,
}: {
  handleSearchParams: (paramsToUpdate: SearchParams) => string;
  price: PriceRange;
  priceParam: string;
}) => {
  const [priceValue, setPriceValue] = useState(priceParam);
  const debouncedValue = useDebounce(priceValue);

  useEffect(() => {
    if (priceParam.length) {
      setPriceValue(priceParam);
    }
  }, []);

  useEffect(() => {
    handleSearchParams({
      [searchParamsKeys.LTE(searchParamsKeys.PRICE)]: debouncedValue.length
        ? debouncedValue
        : null,
    });
  }, [debouncedValue]);

  const handlePriceChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
      .replace(/[^\d.]/g, '')
      .replace(/^0+(\d)/, '$1')
      .replace(/^(\d*\.\d{0,2}).*$/, '$1');

    setPriceValue(value);
  };

  const handleClearInput = () => {
    setPriceValue('');
    handleSearchParams({
      [searchParamsKeys.LTE(searchParamsKeys.PRICE)]: null,
    });
  };

  return (
    <BlockWrapper title="Price Less Than">
      <div className="flex justify-center mb-4 relative">
        <label
          htmlFor="price"
          className="absolute w-[1px] h-[1px] overflow-hidden"
        >
          Input for price search
        </label>

        <input
          id="price"
          name="price"
          value={priceValue}
          onChange={handlePriceChange}
          className="border border-gray-300 rounded-xl px-3 py-1  focus:ring-gray-300 focus:ring-1 focus:outline-none w-24 lg:w-48 pr-6"
        />

        {!!priceValue.length && (
          <button
            className="absolute right-1 top-1/2 -translate-y-1/2"
            onClick={handleClearInput}
          >
            <CircleX className="w-4 h-4 text-gray-500" />
          </button>
        )}
      </div>

      <div className="flex justify-between items-center text-sm">
        <div className="flex flex-col items-center">
          <p>Min Price</p>

          <p className="border border-gray-300 rounded-xl px-3 py-1">
            {price.min}
          </p>
        </div>

        <div className="flex flex-col  items-center">
          <p>Max Price</p>

          <p className="border border-gray-300 rounded-xl px-3 py-1">
            {price.max}
          </p>
        </div>
      </div>
    </BlockWrapper>
  );
};

export default PriceSearcher;
