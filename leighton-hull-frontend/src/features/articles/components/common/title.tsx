import React, { type PropsWithChildren } from "react";

type Props = {
  variant: "primary" | "secondary";
  className?: string;
} & PropsWithChildren;

const variantStyles: Record<Props["variant"], string> = {
  primary: "h2-primary md:h1-primary",
  secondary: "h3-primary"
};

const Title = ({ variant, className = "", children }: Props) => {
  return <p className={`uppercase ${variantStyles[variant]} ${className}`}>{children}</p>;
};

export default Title;
