import React from "react";
import ContactForm from "../components/ContactForm";
import SocialMedia from "../components/SocialMedia";

export default function Contact() {
  return (
    <>
      <div className="contact min-h-screen w-full flex flex-col justify-evenly gap-6">
        <div className="flex flex-col justify-center items-center">
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-mirror="true">
            <h1 className="font-bold text-[2.5rem] w-[600px] pt-[10px] capitalize text-center">contact</h1>
          </div>
          <ContactForm />
        </div>
        <div className="flex items-center justify-center h-[70px]">
          <SocialMedia />
        </div>
      </div>
    </>
  );
}
