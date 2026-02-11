import React, { type PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  className?: string;
}>;

const Paragraph = ({ children, className = "" }: Props) => {
  return <div className={`text-p3-poppins flex flex-col gap-2 ${className}`}>{children}</div>;
};

export default Paragraph;
