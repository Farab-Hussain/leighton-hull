import Api from "@/api";
import { useCallback, useEffect, useState } from "react";
import { schemaForSpeakerForm } from "./speaker-form-validation";
import { usePathname } from "next/navigation";
import { SpeakerInfo } from "@/api/slices/speaker/entity";

const convertDateFormat = (dateStr: string): string => {
  if (!dateStr) return dateStr;
  const [day, month, year] = dateStr.split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export function useSpeakerForm() {
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [date, setDate] = useState("");
  const [eventType, setEventType] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorForName, setErrorForName] = useState("");
  const [errorForEmail, setErrorForEmail] = useState("");
  const [errorForEventType, setErrorForEventType] = useState("");
  const [errorForMessage, setErrorForMessage] = useState("");
  const [errorForOrganization, setErrorForOrganization] = useState("");
  const [errorForDate, setErrorForDate] = useState("");
  const [responseMessage, setResponseMessage] = useState<"error" | "success" | null>(null);

  const pathname = usePathname();

  useEffect(() => {
    setName("");
    setOrganization("");
    setDate("");
    setEventType("");
    setEmail("");
    setMessage("");
    setErrorForName("");
    setErrorForEmail("");
    setErrorForEventType("");
    setErrorForMessage("");
    setErrorForOrganization("");
    setErrorForDate("");
  }, [pathname]);

  const handleSendSpeakerForm = useCallback(async (payload: SpeakerInfo) => {
    const rsp = await Api.speaker.SendSpeakerForm(payload);
    return rsp;
  }, []);

  const handleSubmit = useCallback(async () => {
    const result = schemaForSpeakerForm.safeParse({
      name,
      organization,
      date,
      eventType,
      email,
      message: message ? message : undefined
    });

    if (!result.success) {
      const errors = result.error.flatten();
      setErrorForName(errors.fieldErrors.name?.[0] || "");
      setErrorForEmail(errors.fieldErrors.email?.[0] || "");
      setErrorForEventType(errors.fieldErrors.eventType?.[0] || "");
      setErrorForOrganization(errors.fieldErrors.organization?.[0] || "");
      setErrorForDate(errors.fieldErrors.date?.[0] || "");

      return;
    }

    setErrorForName("");
    setErrorForEmail("");
    setErrorForMessage("");
    setErrorForOrganization("");
    setErrorForDate("");
    setErrorForEventType("");

    const payload: SpeakerInfo = {
      name,
      organization,
      date: convertDateFormat(date),
      eventType,
      email,
      message: message ? message : undefined
    };

    const rsp = await handleSendSpeakerForm(payload);
    if (rsp.meta.status === 201) {
      setResponseMessage("success");
    } else {
      setResponseMessage("error");
    }
  }, [name, organization, date, eventType, email, message, handleSendSpeakerForm]);

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;
    if (responseMessage) {
      setName("");
      setOrganization("");
      setDate("");
      setEventType("");
      setEmail("");
      setMessage("");
      setErrorForName("");
      setErrorForEmail("");
      setErrorForEventType("");
      setErrorForMessage("");
      setErrorForOrganization("");
      setErrorForDate("");

      timer = setTimeout(() => {
        setResponseMessage(null);
      }, 5000);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [responseMessage]);

  return {
    name,
    setName,
    organization,
    setOrganization,
    date,
    setDate,
    eventType,
    setEventType,
    email,
    setEmail,
    message,
    setMessage,
    errorForName,
    errorForEmail,
    errorForEventType,
    errorForMessage,
    errorForOrganization,
    errorForDate,
    responseMessage,
    handleSubmit,
    setErrorForName,
    setErrorForOrganization,
    setErrorForDate,
    setErrorForEventType,
    setErrorForEmail,
    setErrorForMessage
  };
}
