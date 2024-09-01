import React from "react";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <>
      <div className="contact relative lg:h-[100vh] w-full">
        <div className="flex flex-col justify-center items-center">
          <div data-aos="fade-up" data-aos-duration="1000">
            <h1 className="font-bold text-[2.5rem] w-[600px] pt-[70px] capitalize text-center">contact</h1>
          </div>
          <ContactForm />
        </div>
      </div>
    </>
  );
}
