import React, { type PropsWithChildren } from "react";

type Props = {
  title: string;
} & PropsWithChildren;

const ListItem = ({ title, children }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-p3-poppins-bold md:text-p2-poppins-bold">{title}</span>
      <p className="text-p3-poppins">{children}</p>
    </div>
  );
};

export default ListItem;
