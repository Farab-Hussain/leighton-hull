"use client";
import React from "react";
import Link from "next/link";
import Button from "@/common/components/button";
import Input from "@/common/components/input";
import Modal from "@/common/components/modal";
import { linkedInUrl } from "@/common/lib/constants";
import InformationModal from "./information-modal";
import { useContactForm } from "@/features/contact/lib/contact-hook";
import { contactDescription } from "@/features/about/lib/static-info";
import { schemaForContactForm } from "@/features/contact/lib/contact-form-validation";
import Textarea from "@/common/components/input/textarea";

function ContactForm() {
  const {
    name,
    setName,
    email,
    setEmail,
    inquiryType,
    setInquiryType,
    message,
    setMessage,
    errorForName,
    setErrorForName,
    errorForEmail,
    setErrorForEmail,
    errorForInquiryType,
    setErrorForInquiryType,
    errorForMessage,
    setErrorForMessage,
    handleSubmit,
    responseMessage
  } = useContactForm();

  return (
    <div className="relative h-[952px] bg-[url('/images/contact-form.webp')] bg-cover bg-fixed bg-center bg-no-repeat sm:h-[978px] sm:bg-[url('/images/contact-form-sm.webp')] md:h-[822px] md:bg-[url('/images/contact-form-md.webp')] lg:h-[854px]">
      <div className="px-[19px] py-20 sm:pr-[38px] sm:pl-10 md:px-20 md:py-[100px] lg:p-[120px]">
        <div className="flex flex-col items-center justify-center gap-6 sm:gap-10 md:flex-row md:items-start md:gap-20 lg:gap-[120px]">
          <div className="w-full bg-white p-5 sm:p-8 lg:p-10">
            <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10">
              <div className="flex items-center gap-4">
                <Link href={linkedInUrl} target="_blank">
                  <Button variant="outlined-black">Linkedin</Button>
                </Link>
                {/* delete for now */}
                {/* <Link href={instagramUrl} target="_blank">
                  <Button variant="outlined-white" className="border-primary30 border">
                    <p className="text-grey50 font-poppins-bold text-poppins-l2 leading-poppins-l2">Instagram</p>
                  </Button>
                </Link> */}
              </div>
            </div>
          </div>
          <div className="w-full bg-white p-5 sm:p-8 lg:p-10">
            <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
              <div className="flex flex-col gap-3">
                <p className="text-grey50 font-climate-crisis text-climate-crisis-h2 leading-climate-crisis-h2 sm:text-climate-crisis-h1 sm:leading-climate-crisis-h1">
                  CONTACT ME
                </p>
                <p className="text-grey40 font-poppins text-poppins-p3 leading-poppins-p3 md:text-poppins-p2 md:leading-poppins-p2">
                  {contactDescription}
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <Input
                  type="text"
                  label="Name"
                  placeholder="Name"
                  value={name}
                  onChange={val => {
                    setName(val);
                    const result = schemaForContactForm.shape.name.safeParse(val);
                    setErrorForName(result.success ? "" : result.error.issues[0]?.message || "");
                  }}
                  errorMessage={errorForName}
                />

                <Input
                  type="email"
                  label="Email"
                  placeholder="Email"
                  value={email}
                  onChange={val => {
                    setEmail(val);
                    const result = schemaForContactForm.shape.email.safeParse(val);
                    setErrorForEmail(result.success ? "" : result.error.issues[0]?.message || "");
                  }}
                  errorMessage={errorForEmail}
                />

                <Input
                  type="text"
                  label="Type of Inquiry"
                  placeholder="Type of Inquiry"
                  value={inquiryType}
                  onChange={val => {
                    setInquiryType(val);
                    const result = schemaForContactForm.shape.typeOfInquiry.safeParse(val);
                    setErrorForInquiryType(result.success ? "" : result.error.issues[0]?.message || "");
                  }}
                  errorMessage={errorForInquiryType}
                />
                <Textarea
                  value={message}
                  onChange={val => {
                    setMessage(val);
                    const result = schemaForContactForm.shape.message.safeParse(val);
                    setErrorForMessage(result.success ? "" : result.error.issues[0]?.message || "");
                  }}
                  className="h-[200px] sm:h-[160px]"
                  errorMessage={errorForMessage}
                />
              </div>

              <div className="flex items-end justify-end">
                <Button variant="primary" className="w-[91px]" onClick={handleSubmit}>
                  SEND
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {responseMessage && (
        <Modal open={true}>
          <InformationModal type={responseMessage} />
        </Modal>
      )}
    </div>
  );
}

export default ContactForm;
