import ContactForm from "../components/ContactForm";
import React from "react";
import Image from "next/image";
import contacts from "../../public/images/contacts.png";
const Page = () => {
  return (
    <div className="w-full h-full flex flex-row">
      <div className="w-[100%] h-screen bg-cover bg-center flex items-center justify-center pt-10">
        <div className="w-[50%] h-auto">
          <Image
            src={contacts}
            alt="logo"
            className="w-[700px] h-auto object-contain rounded-r-4xl"
          />
        </div>
        <div className="h-[60%] w-[50%] flex items-center justify-center bg-amber-300 bg-center rounded-l-4xl ">
          <div className="flex items-center justify-center w-[80%] md:w-[50%]">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
