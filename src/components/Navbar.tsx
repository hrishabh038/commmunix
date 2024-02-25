import Image from "next/image";
import React from "react";
import { logo } from "@/assects/assects";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="fixed top-0 left-0 right-0 border-b px-4 bg-white shadow">
      <div className=" h-[100px] flex items-center gap-6 justify-between w-full xl:w-[1200px] m-auto">
        <div className="relative w-[90px] h-[70px]">
          <Image fill src={logo} alt="logo" />
        </div>
        <ul className="hidden sm:flex items-center gap-8 text-xs tracking-widest">
          <li>
            <a className="font-semibold cursor-pointer hover:text-orange-500">
              HOME
            </a>
          </li>
          <li>
            <a className="font-semibold cursor-pointer hover:text-orange-500">
              ABOUT
            </a>
          </li>
          <li>
            <a className="font-semibold cursor-pointer hover:text-orange-500">
              CONTACT
            </a>
          </li>
        </ul>
        <button className="bg_company_gradient text-white rounded-lg px-4 py-2 hidden sm:block">
          Subscribe Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
