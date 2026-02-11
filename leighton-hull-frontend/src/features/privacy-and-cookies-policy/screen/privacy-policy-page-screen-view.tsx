import BackButton from "@/features/privacy-and-cookies-policy/components/back-button";
import ListItem from "@/features/privacy-and-cookies-policy/components/list-item";
import { privacyItems } from "@/features/privacy-and-cookies-policy/lib/privacy-items";
import React from "react";

const PrivacyPolicyPageScreenView = () => {
  return (
    <div className="flex flex-col gap-6 px-5 pt-10 pb-16 sm:gap-8 sm:px-10 md:gap-12 md:px-[120px] md:pb-20 lg:gap-10 lg:px-[300px]">
      <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
        <BackButton />
        <p className="h3-primary md:h2-primary uppercase">Privacy & Cookies Policy</p>
      </div>

      <div className="flex flex-col gap-5 md:gap-6">
        {privacyItems.map((item, index) => (
          <ListItem key={index} title={item.title}>
            {item.content}
          </ListItem>
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicyPageScreenView;
