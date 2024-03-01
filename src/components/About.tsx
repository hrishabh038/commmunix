import React from "react";
import AboutCard from "./AboutCard";
import { ourMission, ourValues, shreya } from "@/assects/assects";
import Image from "next/image";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="flex flex-col gap-24 items-center">
      <div className="flex flex-col sm:flex-row items-center gap-8">
        <div className="relative bg-black/15 w-full sm:min-w-[300px] md:min-w-[400px] lg:min-w-[500px] aspect-square rounded-lg">
          <Image
            className="rounded-lg"
            src={shreya}
            alt="Shreya"
            fill
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold leading-8 tracking-wide">
            Story of <span className="text-orange-500">Commmunix</span>
          </h1>
          <p className="text-lg text-neutral-500 leading-8">
            At Commmunix, we started as a small business with a big dream. Our
            founder,{" "}
            <span className="text-orange-500 font-semibold">
              Shreya Choudhary
            </span>
            , had a vision to create a company that would revolutionize the
            industry. With hard work and dedication, we have grown into the
            successful business we are today.
          </p>
        </div>
      </div>

      <div className="flex  flex-col-reverse sm:flex-row items-center gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold leading-8 tracking-wide">
            Our values at <span className="text-orange-500">Commmunix</span>
          </h1>
          <p className="text-lg text-neutral-500 leading-8">
            Our values are the foundation of everything we do. We believe in
            honesty, integrity, and transparency in all our dealings with our
            customers. We are committed to providing exceptional customer
            service and delivering on our promises.
          </p>
        </div>
        <div className="relative border bg-black/15 w-full sm:min-w-[300px] md:min-w-[400px] lg:min-w-[500px] aspect-video rounded-lg  shadow-xl">
          <Image
            className="rounded-lg"
            src={ourValues}
            alt="Our Values"
            fill
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-8">
        <div className="relative border bg-black/15 w-full sm:min-w-[300px] md:min-w-[400px] lg:min-w-[500px] aspect-video rounded-lg  shadow-xl">
          <Image
            className="rounded-lg"
            src={ourMission}
            alt="Our Mission"
            fill
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold leading-8 tracking-wide">
            Our mission at <span className="text-orange-500">Commmunix</span>
          </h1>
          <p className="text-lg text-neutral-500 leading-8">
            Our mission at Commmunix is to provide superior products and
            services to our customers, while maintaining the highest standards
            of quality and professionalism. We are committed to building lasting
            relationships with our clients, and working together to achieve
            success.
          </p>
        </div>
      </div>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-8 md:gap-6">
        <AboutCard />
        <AboutCard />
        <AboutCard />
      </div> */}
    </div>
  );
};

export default About;
