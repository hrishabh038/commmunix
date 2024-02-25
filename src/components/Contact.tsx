import React from "react";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div className="bg_company_gradient_only px-4 py-10 rounded-lg text-white ">
      <div className="text-center flex flex-col items-center justify-center gap-6 w-full sm:w-[600px] m-auto">
        <h1 className="text-3xl tracking-wide font-bold">
          Call Us Today To Get Started
        </h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          provident ea fugiat atque doloremque velit neque eum fuga quidem
          debitis eius quibusdam esse quas commodi quisquam veritatis, corrupti
          nam repudiandae.
        </p>
        <button className="py-3 px-6 bg-white hover:bg-white/80 scale-105 hover:scale-100 rounded-lg text-black font-semibold">Give us a call now</button>
      </div>
    </div>
  );
};

export default Contact;
