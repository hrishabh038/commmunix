import { whatsapp } from "@/assects/assects";
import Image from "next/image";
import React from "react";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div className="bg_company_gradient_only px-4 py-10 rounded-lg text-white ">
      <div className="text-center flex flex-col items-center justify-center gap-6 w-full sm:w-[600px] m-auto">
        <h1 className="text-3xl tracking-wide font-bold">
        Communication is the Key
        </h1>
        <p className="text-center">
        We strive to stay in communication with our clients. Have a question about our business, or want to see if we match your specific needs? Send us a message, or give us a call. We're always happy to meet new customers!
        </p>
        <button className="duration-200 pr-5 bg-white scale-105 hover:scale-100 rounded-lg font-semibold flex items-center justify-center">
          <div className="relative w-[70px] aspect-square rounded-lg">
            <Image className="rounded-lg" src={whatsapp} alt="Whatsapp" fill />
          </div>
          <div className="text-[#41C552] font-bold text-lg">
            Message on Whatsapp!
          </div>
        </button>
      </div>
    </div>
  );
};

export default Contact;
