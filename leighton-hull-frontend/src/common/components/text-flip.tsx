import React, { type PropsWithChildren } from "react";

const TextFlip = ({ children }: PropsWithChildren) => (
  <div className="group relative inline-block overflow-hidden">
    <span className="block transition-transform duration-[400ms] group-hover:-translate-y-[110%]">{children}</span>
    <span className="absolute inset-0 block translate-y-full transition-transform duration-[400ms] group-hover:translate-y-0">
      {children}
    </span>
  </div>
);

export default TextFlip;
