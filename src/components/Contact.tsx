"use client";
import React, { useState } from "react";
import Heading from "./Heading";
import { twMerge } from "tailwind-merge";
import WhatsappBtn from "./WhatsappBtn";

type Props = {};

const Contact = (props: Props) => {
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return (
    <div className="flex flex-col gap-14">
      <Heading title="Contact Us" />
      <div className="flex flex-wrap md:flex-nowrap gap-8">
        <div className="flex flex-col justify-between gap-4 w-full">
          <h1 className="text-xl font-semibold">Communication is the Key</h1>
          <p className="text-neutral-500 text-lg">
            We strive to stay in communication with our clients. Have a question
            about our business, or want to see if we match your specific needs?
            Send us a message, or give us a call. We&apos;re always happy to meet new
            customers!
          </p>
          <WhatsappBtn />
        </div>
        <div className="bg-neutral-100 w-full h-full p-4 rounded-lg border flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-neutral-300 font-bold text-xs">Location</h1>
            <p className=" text-neutral-400">
              Commmunix India, Jayadev Vihar Road, Block N6, IRC Village,
              Jayadev Vihar, Bhubaneswar, Odisha, India
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-lg text-neutral-400 font-bold">
                Planning To Visit?
              </p>
              <p className="t">
                Our Timing:{" "}
                <span className="text-orange-500">09:00 am – 06:30 pm</span>
              </p>
            </div>
            <ul className="flex items-center gap-2">
              {day.map((text) => (
                <Weekday key={text} day={text} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

type WeekdayProps = {
  day: string;
};
const Weekday = (props: WeekdayProps) => {
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const currentDay = new Date().getDay();
  const isActive = props.day === day[currentDay];
  return (
    <li
      className={twMerge(
        "rounded-full w-[40px] h-[40px] bg-neutral-300 flex items-center justify-center text-white text-sm",
        isActive && "bg_company_gradient_only"
      )}
    >
      <span>{props.day}</span>
    </li>
  );
};

export default Contact;
