import { whatsapp } from "@/assects/assects";
import Image from "next/image";
import React from "react";

type Props = { text: string };

const WhatsappBtn = (props: Props) => {
  return (
    <a href="https://api.whatsapp.com/send/?phone=919692552656&text&type=phone_number&app_absent=0">
      <button className="duration-200 pr-5 bg-[#F4F4F4] scale-105 hover:scale-100 rounded-lg font-semibold flex items-center justify-center border">
        <div className="relative w-[70px] aspect-square rounded-lg">
          <Image className="rounded-lg" src={whatsapp} alt="Whatsapp" fill />
        </div>
        <div className="text-[#41C552] font-bold text-lg">
          {props.text ? props.text : "Message on Whatsapp!"}
        </div>
      </button>
    </a>
  );
};

export default WhatsappBtn;
