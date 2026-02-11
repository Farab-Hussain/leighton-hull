import Container from "@/features/articles/components/common/container";
import React from "react";

type Props = {
  text: string;
  backstory: string;
};

const Quote = ({ text, backstory }: Props) => {
  return (
    <Container className="!bg-primary30 text-center">
      <p className="text-p2-lora md:text-p1-lora text-grey20">{text}</p>
      <p className="text-p3-poppins md:text-p2-poppins text-white italic">{backstory}</p>
    </Container>
  );
};

export default Quote;
