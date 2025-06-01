import React from 'react';

const GridContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid justify-center grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-x-3 xs:gap-x-4 md:gap-x-5 lg:gap-x-6 mx-0 sm:mx-8 md:md-16 lg:mx-24 xl:mx-auto max-w-[1440px] outline-none focus:outline-none">
      {children}
    </div>
  );
};

export default GridContainer;
