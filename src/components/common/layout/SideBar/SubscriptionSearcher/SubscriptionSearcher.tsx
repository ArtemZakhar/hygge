import { ChangeEvent } from 'react';

import { searchParamsKeys } from '../../../../../constants/searchParams';
import { SearchParams } from '../../../../../types/searchParams';
import BlockWrapper from '../BlockWrapper';

const SubscriptionSearcher = ({
  subscriptionParam,
  handleSearchParams,
}: {
  handleSearchParams: (paramsToUpdate: SearchParams) => string;
  subscriptionParam: string;
}) => {
  const handleSubscriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.checked ? 'true' : null;

    handleSearchParams({
      [searchParamsKeys.SUBSCRIPTION]: value,
    });
  };

  return (
    <BlockWrapper title="Subscription">
      <div className='flex gap-2 justify-center items-center'>
        <input
          id="subscription"
          name="subscription"
          type="checkbox"
          checked={subscriptionParam === 'true'}
          onChange={handleSubscriptionChange}
        />

        <label htmlFor="subscription" className="text-sm">
          Only with subscription
        </label>
      </div>
    </BlockWrapper>
  );
};

export default SubscriptionSearcher;
