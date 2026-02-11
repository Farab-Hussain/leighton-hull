"use client";
import React from "react";
import Button from "@/common/components/button";
import Input from "@/common/components/input";
import Modal from "@/common/components/modal";
import InformationModal from "@/features/layout/components/information-modal";
import { useSpeakerForm } from "@/features/speaker/lib/speaker-hook";
import { handleDateValidation, schemaForSpeakerForm } from "@/features/speaker/lib/speaker-form-validation";

const SpeakerRequestForm = () => {
  const {
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
    responseMessage,
    errorForName,
    errorForEmail,
    errorForEventType,
    errorForMessage,
    errorForOrganization,
    errorForDate,
    handleSubmit,
    setErrorForName,
    setErrorForOrganization,
    setErrorForDate,
    setErrorForEventType,
    setErrorForEmail,
    setErrorForMessage
  } = useSpeakerForm();

  return (
    <div className="flex max-w-[1040px] flex-col gap-4 bg-white p-5 max-md:w-full sm:gap-5 sm:p-8 md:max-w-[660px] md:flex-1 md:gap-6 lg:p-10">
      <p className="text-p3-poppins md:text-p2-poppins">Tell us about your event and we’ll reach out shortly.</p>
      <div className="flex flex-col gap-3">
        <Input
          label="Name"
          placeholder="Name"
          value={name}
          onChange={val => {
            setName(val);
            const result = schemaForSpeakerForm.shape.name.safeParse(val);
            setErrorForName(result.success ? "" : result.error.issues[0]?.message || "");
          }}
          errorMessage={errorForName}
          className="h-[46px]"
        />
        <Input
          label="Organization"
          placeholder="Organization"
          value={organization}
          onChange={val => {
            setOrganization(val);
            const result = schemaForSpeakerForm.shape.organization.safeParse(val);
            setErrorForOrganization(result.success ? "" : result.error.issues[0]?.message || "");
          }}
          errorMessage={errorForOrganization}
        />
        <Input
          type="text"
          label="Date"
          placeholder="Date (DD/MM/YYYY)"
          maxLength={10}
          value={date}
          onChange={val => handleDateValidation({ val, date, setDate, setErrorForDate })}
          errorMessage={errorForDate}
        />
        <Input
          type="text"
          label="Event type"
          placeholder="Event type"
          value={eventType}
          onChange={val => {
            setEventType(val);
            const result = schemaForSpeakerForm.shape.eventType.safeParse(val);
            setErrorForEventType(result.success ? "" : result.error.issues[0]?.message || "");
          }}
          errorMessage={errorForEventType}
        />
        <Input
          type="email"
          label="Email"
          placeholder="Email"
          value={email}
          onChange={val => {
            setEmail(val);
            const result = schemaForSpeakerForm.shape.email.safeParse(val);
            setErrorForEmail(result.success ? "" : result.error.issues[0]?.message || "");
          }}
          errorMessage={errorForEmail}
        />
        <div className="flex flex-col">
          <textarea
            value={message}
            onChange={val => {
              const newValue = val.target.value;

              if (newValue.length > 500) {
                setErrorForMessage("Message too long - please keep under 500 characters.");
                return;
              }

              setMessage(newValue);

              if (newValue.trim() === "") {
                setErrorForMessage("");
              }
            }}
            className="border-grey30 font-poppins text-poppins-p3 leading-poppins-p3 text-grey50 placeholder:text-grey30 focus:border-primary30 h-[160px] resize-none border px-3.5 py-2.5 focus:outline-none sm:h-[120px] lg:h-[130px]"
            placeholder="Message (optional)"
          />

          {errorForMessage && <p className="text-poppins-p4 font-poppins leading-poppins-p4 text-red mt-1">{errorForMessage}</p>}
        </div>
      </div>
      <div className="flex items-center justify-end sm:justify-end">
        <Button variant="primary" className="mt-[1px] w-max" onClick={handleSubmit}>
          <p className="font-poppins-bold text-poppins-l2 leading-poppins-l2 text-white">REQUEST</p>
        </Button>
      </div>
      {responseMessage && (
        <Modal open={true}>
          <InformationModal type={responseMessage} />
        </Modal>
      )}
    </div>
  );
};

export default SpeakerRequestForm;
