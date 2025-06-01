import { SearchParams } from '../types/searchParams';

export const getUpdatedSearchParams = (
  currentParams: URLSearchParams,
  paramsToUpdate: SearchParams,
): string => {
  const newParams = new URLSearchParams(currentParams);

  for (const [key, value] of Object.entries(paramsToUpdate)) {
    if (value === null) {
      newParams.delete(key);
    } else if (Array.isArray(value)) {
      newParams.delete(key);

      for (const part of value) {
        newParams.append(key, part);
      }
    } else {
      newParams.set(key, value);
    }
  }

  return newParams.toString();
};

export const getSearchParamsObject = (
  searchParams?: URLSearchParams,
): SearchParams => {
  if (!searchParams) return {};

  return searchParams.entries().reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {} as SearchParams);
};
