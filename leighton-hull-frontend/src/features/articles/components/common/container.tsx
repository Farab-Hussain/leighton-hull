import React, { type PropsWithChildren } from "react";

const Container = ({ children, className }: PropsWithChildren & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={`flex flex-col gap-4 px-5 py-16 sm:gap-5 sm:px-10 md:gap-6 md:px-[120px] md:py-20 lg:px-[300px] ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
