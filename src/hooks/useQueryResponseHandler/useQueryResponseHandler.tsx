import ErrorMessage from '../../components/common/ErrorMessage';
import Loader from '../../components/common/Loader';

const useQueryResponseHandler = ({
  isLoading,
  isError,
  customErrorMessage,
}: {
  isLoading: boolean;
  isError: boolean;
  customErrorMessage?: string;
}) => {
  if (isLoading) return <Loader />;

  if (isError) return <ErrorMessage errorMessage={customErrorMessage} />;
};

export default useQueryResponseHandler;
