import { HomeIcon } from "lucide-react";
import React from "react";

type Props = {
  icon: React.ReactNode
  title: string
  para: string
};

const ServiceCard = ({title,para, icon}: Props) => {
  return (
    <div className="w-full  border hover:border-orange-500 rounded-lg bg-white p-5 flex flex-col gap-6 shadow">
      <HomeIcon className="w-[40px] h-[40px] text-orange-500" />
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-semibold">{title}</h1>
        <p className="text-neutral-400 ">
          {para}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
