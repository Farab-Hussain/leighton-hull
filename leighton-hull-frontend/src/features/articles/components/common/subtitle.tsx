import React, { type PropsWithChildren } from "react";

type Props = {
  variant: "primary" | "secondary";
  className?: string;
} & PropsWithChildren;

const variantStyles: Record<Props["variant"], string> = {
  primary: "h3-secondary md:h1-secondary",
  secondary: "text-p2-poppins text-primary30 md:text-p1-poppins"
};

const Subtitle = ({ variant, className = "", children }: Props) => {
  return <p className={`${variantStyles[variant]} ${className}`}>{children}</p>;
};

export default Subtitle;
