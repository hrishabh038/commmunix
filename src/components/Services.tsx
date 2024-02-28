import React from "react";
import Heading from "./Heading";
import ServiceCard from "./ServiceCard";

type Props = {};

const Services = (props: Props) => {
  return (
    <div className="bg-neutral-100 py-16 px-4 gap-12 flex flex-col rounded-lg border">
      <Heading smText="what we offer" title="Services we provide" para="" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <ServiceCard
          title="Website Development"
          para="Allowing businesses to establish their online presence, connect with customers, and drive growth in the digital world."
        />
        <ServiceCard
          title="Consulting"
          para="Consulting is like having a knowledgeable partner who provides expert advice and helps businesses make better decisions. It's invaluable!"
        />
        <ServiceCard
          title="Digital Marketing"
          para="Helps businesses connect with customers online, boost brand visibility, and drive sales. It's like a supercharged advertising strategy!"
        />
        <ServiceCard
          title="Information Technology"
          para="Helps businesses streamline operations, protect data, and stay competitive in the digital world. It's like a technological backbone!"
        />
        <ServiceCard
          title="Content Writing"
          para="Content writing is important because it helps communicate effectively, engage audience, and establish credibility. It's like the voice of a brand!"
        />
        <ServiceCard
          title="Coding"
          para="Coding is needed to build websites, apps, and software that make our digital lives possible. It's like the backbone of technology!"
        />
        <ServiceCard
          title="App Development"
          para="App development is super important for businesses to have a strong mobile presence and provide a great user experience."
        />
        <ServiceCard
          title="Software Development"
          para="Software development is needed for businesses because it helps create custom solutions and improve efficiency in different industries."
        />
        <ServiceCard
          title="KPO"
          para="KPO, or Knowledge Process Outsourcing, is important for businesses as it allows them to leverage specialized knowledge and expertise from external sources."
        />
        <ServiceCard
          title="BPO"
          para="Business Process Outsourcing, is important for businesses as it enables them to streamline operations, reduce costs, and focus on core competencies."
        />
      </div>
    </div>
  );
};

export default Services;
