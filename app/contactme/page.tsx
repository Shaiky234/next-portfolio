import ContactForm from "../components/ContactForm";
import React from "react";
import Image from "next/image";
import con from "../../public/images/con.png";
const Page = () => {
  return (
    <div className="w-full h-full flex flex-row ">
      <div className="w-[100%] h-screen bg-cover bg-center flex items-center justify-end">
        <div className="h-[60%] w-[50%] ">
          {" "}
          <Image
            src={con}
            alt="logo"
            className="w-220  object-contain rounded-r-4xl"
          />
        </div>
        <div className="h-[60%] w-[50%]  flex items-center justify-center bg-amber-300 bg-center rounded-l-4xl ">
          <div className="flex items-center justify-center w-[80%] md:w-[50%]">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
