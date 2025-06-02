const BlockWrapper = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <div className="p-2 border-2 rounded-xl border-gray-100">
      <h5 className="text-center mb-3 ">{title}</h5>
      {children}
    </div>
  );
};

export default BlockWrapper;
