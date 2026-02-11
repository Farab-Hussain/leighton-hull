import React from "react";

interface CornerSquareProps {
  className: string;
  forceActive?: boolean;
}

const CornerSquare = ({ className, forceActive = false }: CornerSquareProps) => (
  <span
    className={`border-grey50 absolute size-2.5 border-2 bg-white transition-opacity duration-500 [@media(max-height:640px)]:size-2 ${forceActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"} ${className} `}
  />
);

export default CornerSquare;
