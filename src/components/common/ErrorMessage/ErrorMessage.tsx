const ErrorMessage = ({
  errorMessage = 'Something went wrong. Please try again later.',
}: {
  errorMessage?: string;
}) => {
  return (
    <div className="h-[100%] flex justify-center items-center">
      <h3>{errorMessage}</h3>
    </div>
  );
};

export default ErrorMessage;
