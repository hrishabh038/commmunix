import Image from "next/image";
import React from "react";
import { logo } from "@/assects/assects";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className=" fixed top-0 left-0 right-0 border-b px-4 bg-white shadow z-50">
      <div className=" h-[100px] flex items-center gap-6 justify-between w-full xl:w-[1200px] m-auto">
        <div className="relative w-[90px] h-[70px]">
          <Image fill src={logo} alt="logo" />
        </div>
        <button className="scale-105 hover:scale-100 bg_company_gradient text-white rounded-lg px-4 py-2 hidden sm:block">
            Contact Us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
