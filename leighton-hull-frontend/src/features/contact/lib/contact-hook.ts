import Api from "@/api";
import { useCallback, useEffect, useState } from "react";
import { schemaForContactForm } from "./contact-form-validation";
import { usePathname } from "next/navigation";
import { ContactInfo } from "@/api/slices/contact/entity";

export function useContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [inquiryType, setInquiryType] = useState("");
  const [message, setMessage] = useState("");
  const [errorForName, setErrorForName] = useState("");
  const [errorForEmail, setErrorForEmail] = useState("");
  const [errorForInquiryType, setErrorForInquiryType] = useState("");
  const [errorForMessage, setErrorForMessage] = useState("");
  const [responseMessage, setResponseMessage] = useState<"error" | "success" | null>(null);

  const pathname = usePathname();

  useEffect(() => {
    setName("");
    setEmail("");
    setInquiryType("");
    setMessage("");
    setErrorForName("");
    setErrorForEmail("");
    setErrorForInquiryType("");
    setErrorForMessage("");
  }, [pathname]);

  const handleSendContactForm = useCallback(async (payload: ContactInfo) => {
    const rsp = await Api.contact.SendContactForm(payload);
    return rsp;
  }, []);

  const handleSubmit = useCallback(async () => {
    const result = schemaForContactForm.safeParse({
      name,
      email,
      typeOfInquiry: inquiryType,
      message
    });

    if (!result.success) {
      const errors = result.error.flatten();
      setErrorForName(errors.fieldErrors.name?.[0] || "");
      setErrorForEmail(errors.fieldErrors.email?.[0] || "");
      setErrorForInquiryType(errors.fieldErrors.typeOfInquiry?.[0] || "");
      setErrorForMessage(errors.fieldErrors.message?.[0] || "");
      return;
    }

    setErrorForName("");
    setErrorForEmail("");
    setErrorForInquiryType("");
    setErrorForMessage("");

    const payload: ContactInfo = {
      name,
      email,
      typeOfInquiry: inquiryType,
      message
    };

    const rsp = await handleSendContactForm(payload);
    if (rsp.meta.status === 201) {
      setResponseMessage("success");
    } else {
      setResponseMessage("error");
    }
  }, [name, email, inquiryType, message, handleSendContactForm]);

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;
    if (responseMessage) {
      setName("");
      setEmail("");
      setInquiryType("");
      setMessage("");

      timer = setTimeout(() => {
        setResponseMessage(null);
      }, 5000);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [responseMessage, setResponseMessage]);

  return {
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
  };
}
