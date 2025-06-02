import { searchParamsKeys } from '../../../constants/searchParams';
import { useGetProducts } from '../../../context/ProductContext';
import useHandleSearchParams from '../../../hooks/useHandleSearchParams';
import useQueryResponseHandler from '../../../hooks/useQueryResponseHandler';
import useUserSearchParametersHandler from '../../../hooks/useUserSearchParametersHandler';
import PriceSearcher from './PriceSearcher';
import SubscriptionSearcher from './SubscriptionSearcher';
import TagsSearcher from './TagsSearcher';

const SideBar = () => {
  const { totalCount } = useGetProducts();
  const { isError, isLoading, tags, price, hasSubscription } =
    useUserSearchParametersHandler();

  const { searchParams, handleSearchParams } = useHandleSearchParams();

  const tagsParams =
    searchParams.getAll(searchParamsKeys.LIKE(searchParamsKeys.TAGS)) || [];
  const priceParam = searchParams.get(searchParamsKeys.PRICE) || '';
  const subscriptionParam =
    searchParams.get(searchParamsKeys.SUBSCRIPTION) || '';

  const context = useQueryResponseHandler({ isError, isLoading });

  return (
    <aside className="hidden relative sm:col-span-2 lg:col-span-3 rounded-xl px-4 py-4 bg-background-primary h-[80vh] sm:flex ">
      <div className="relative h-full flex flex-col gap-4">
        {context && context}
        <h4 className="text-center">{`Has found ${totalCount} products`}</h4>

        {!!tags.length && (
          <TagsSearcher
            tags={tags}
            handleSearchParams={handleSearchParams}
            tagsParams={tagsParams}
          />
        )}

        {!isLoading && (
          <PriceSearcher
            price={price}
            priceParam={priceParam}
            handleSearchParams={handleSearchParams}
          />
        )}

        {hasSubscription && (
          <SubscriptionSearcher
            subscriptionParam={subscriptionParam}
            handleSearchParams={handleSearchParams}
          />
        )}
      </div>
    </aside>
  );
};

export default SideBar;
