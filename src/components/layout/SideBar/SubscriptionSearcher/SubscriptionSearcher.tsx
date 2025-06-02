import { ChangeEvent } from 'react';

import BlockWrapper from '../BlockWrapper';
import { SearchParams } from '../../../../types/searchParams';
import { searchParamsKeys } from '../../../../constants/searchParams';

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
