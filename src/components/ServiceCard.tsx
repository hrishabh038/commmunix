import { HomeIcon } from "lucide-react";
import React from "react";

type Props = {};

const ServiceCard = (props: Props) => {
  return (
    <div className="w-full sm:w-[350px] border hover:border-orange-500 rounded-lg bg-white p-5 flex flex-col gap-6">
      <HomeIcon className="w-[35px] h-[35px] text-orange-500" />
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-semibold">Lorem, ipsum dolor.</h1>
        <p className="text-neutral-400 line-clamp-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
          aliquam impedit dolorum nesciunt, pariatur ea, cumque odio quam,
          quaerat tenetur at omnis nobis dolores numquam atque hic ut nemo.
          Itaque.
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
