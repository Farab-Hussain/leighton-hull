import ContactForm from "@/features/layout/components/contact-form";
import React, { type PropsWithChildren } from "react";

const WithContactFormLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      {children}
      <ContactForm />
    </>
  );
};

export default WithContactFormLayout;
