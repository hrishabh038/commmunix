import { HomeIcon, LucideIcon } from "lucide-react";
import React from "react";

type Props = {
  icon: LucideIcon;
  title: string;
  para: string;
};

const ServiceCard = ({ title, para, icon: Icon }: Props) => {
  return (
    <div className="w-full  border hover:border-orange-500 rounded-lg bg-white p-5 flex flex-col gap-3 shadow">
      <div className="flex items-center gap-3 flex-wrap">
        <Icon className="w-[38px] h-[38px] text-orange-500" />
        <h1 className="text-lg font-semibold">{title}</h1>
      </div>
      <p className="text-neutral-400 ">{para}</p>
    </div>
  );
};

export default ServiceCard;
