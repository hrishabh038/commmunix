import { bhuvneshwar } from "@/assects/assects";
import Image from "next/image";
import React from "react";
import WhatsappBtn from "./WhatsappBtn";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div className="relative rounded-lg border bg-black/15 w-full h-[500px]">
      <Image
        className="rounded-lg bg-cover"
        src={bhuvneshwar}
        alt="Bhuvneshwar"
        fill
      />
      <div className="absolute w-full h-full bg-white/15 rounded-lg banner-bg  flex flex-col justify-center p-4 sm:p-6 md:p-10">
        <div className="text-white w-full sm:w-[500px] flex flex-col gap-4">
          <p className="text-base md:text-lg font-semibold">
            We provide customized solutions that fit your unique business needs.
          </p>
          <h1 className="text-2xl md:text-4xl font-bold">
            Transforming your business with innovative solutions
          </h1>
          <button className="scale-110 hover:scale-105 bg_company_gradient text-white rounded-lg px-4 py-2 w-fit mt-5">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
