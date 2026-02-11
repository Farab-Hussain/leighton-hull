import React from "react";

export type HeadingColor = "orange" | "black";
export type HeadingSize = "large" | "medium" | "small";

interface Props {
  headerText: string;
  color: HeadingColor;
  subTitle?: string;
  childClassName?: string;
  size?: HeadingSize;
}

function Heading({ headerText, color, subTitle, childClassName, size = "large" }: Props) {
  const colorClasses = color === "orange" ? "text-orange20" : "text-grey60";

  const sizeClasses =
    size === "large"
      ? "font-tigeroa-regular text-tigeroa-h3 leading-tigeroa-h3 md:text-tigeroa-h2 md:leading-tigeroa-h2 xl:text-tigeroa-h1 xl:leading-tigeroa-h1"
      : size === "medium"
        ? "font-tigeroa-regular text-tigeroa-h2 leading-tigeroa-h2 md:text-tigeroa-p1 md:leading-urbanist-p1 xl:text-urbanist-h1 xl:leading-urbanist-h4"
        : "font-tigeroa-regular text-tigeroa-h5 leading-tigeroa-h5";

  return (
    <div className="flex w-full flex-col">
      {subTitle && (
        <p className="font-urbanist-medium text-grey60 xl:leading-urbanist-h4 xl:text-urbanist-h3 uppercase">{subTitle}</p>
      )}
      <p className={`font-tigeroa-regular uppercase ${colorClasses} ${sizeClasses} ${childClassName}`}>{headerText}</p>
    </div>
  );
}

export default Heading;
