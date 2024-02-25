import { logo } from "@/assects/assects";
import About from "@/components/About";
import BannerCard from "@/components/AboutCard";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Service from "@/components/ServiceCard";
import Services from "@/components/Services";
import { AudioWaveform, Combine, Cpu, HomeIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" w-full xl:w-[1200px] m-auto flex flex-col gap-32">
      <Banner />
      <About />
      <Services />
      <Contact />
    </div>
  );
}
