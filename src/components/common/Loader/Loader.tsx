const Loader = () => {
  return (
    <div className="h-[100%] w-[100%] absolute flex justify-center items-center bg-black/5 rounded-lg">
      <div className="w-8 h-8 rounded-full mx-auto my-4 border-solid border-4 border-grey-400 border-l-black animate-loader" />
    </div>
  );
};

export default Loader;
