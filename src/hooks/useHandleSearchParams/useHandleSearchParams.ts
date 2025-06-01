import { URLSearchParamsInit, useSearchParams } from 'react-router-dom';

import { SearchParams } from '../../types/searchParams';
import { getUpdatedSearchParams } from '../../utilities/searchHelper';

const useHandleSearchParams = (initialParams?: URLSearchParamsInit) => {
  const [searchParams, setSearchParams] = useSearchParams(initialParams);

  const handleSearchParams = (paramsToUpdate: SearchParams) => {
    const newParams = getUpdatedSearchParams(searchParams, paramsToUpdate);

    setSearchParams(newParams);

    return newParams;
  };

  return { searchParams, handleSearchParams };
};

export default useHandleSearchParams;
