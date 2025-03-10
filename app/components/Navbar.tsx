'use client'
import React from "react";
import { Socials } from "./constants";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="fixed top-0 z-[40] w-full h-[100px] bg-black flex justify-between items-center px-10 md:px-20">
      <div className="flex flex-row gap-3 items-center">
        <div className="relative">
          {
            <Image
              src="/logo.svg"
              alt="logo"
              width={10}
              height={20}
              className="w-10 h-10 object-contain rounded-full"
            />
          }
        </div>
        <h1 className="text-yellow-500 text-[25px] font-semibold">
          Shaik{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-400">
            {" "}
            Portfolio{" "}
          </span>
        </h1>
      </div>
      <div className="flex flex-row gap-5 mb-2 ">
        {Socials.map((social) => (
          <Link href={social.href} key={social.name}>
            {" "}
            <Image
              src={social.src}
              alt={social.name}
              width={28}
              height={28}
            />{" "}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
