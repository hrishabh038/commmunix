import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="px-4 bg-neutral-200 py-14">
      <div className="flex flex-col items-center gap-6 justify-between w-full xl:w-[1200px] m-auto text-center text-neutral-500 text-sm">
        <p>COPYRIGHT © 2024 <span className="text-purple-500 font-semibold">COMMMUNIX</span> INDIA - ALL RIGHTS RESERVED.</p>
        <div className="bg_company_gradient_only h-[2px] w-[75px] rounded-lg"></div>
        <a href="https://designndev.vercel.app/">
          DESIGNED WITH ❤ BY{" "}
          <span className="text-purple-500 font-semibold">DESIGNNDEV</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
