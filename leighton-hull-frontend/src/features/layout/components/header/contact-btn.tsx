import React from "react";
import Link from "next/link";
import Button from "@/common/components/button";

const ContactBtn = () => {
  return (
    <Link href="contact" className="max-sm:hidden">
      <Button className="h-full">Contact</Button>
    </Link>
  );
};

export default ContactBtn;
