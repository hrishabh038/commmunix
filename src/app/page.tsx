import { logo } from "@/assects/assects";
import { AudioWaveform, Combine, Cpu } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <nav className="fixed top-0 left-0 right-0 border-b px-4 bg-white shadow">
        <div className=" h-[100px] flex items-center gap-6 justify-between w-full xl:w-[1200px] m-auto">
          <div className="relative w-[90px] h-[70px]">
            <Image fill src={logo} alt="logo" />
          </div>
          <ul className="hidden sm:flex items-center gap-8 text-xs tracking-widest">
            <li>
              <a className="font-semibold cursor-pointer hover:text-orange-500">
                HOME
              </a>
            </li>
            <li>
              <a className="font-semibold cursor-pointer hover:text-orange-500">
                ABOUT
              </a>
            </li>
            <li>
              <a className="font-semibold cursor-pointer hover:text-orange-500">
                CONTACT
              </a>
            </li>
          </ul>
          <button className="bg-purple-500 hover:bg-purple-700 text-white rounded-lg px-4 py-2 hidden sm:block">
            Subscribe Now
          </button>
        </div>
      </nav>

      <div className="w-full py-[125px] px-4">
        <div className=" w-full xl:w-[1200px] m-auto flex flex-col gap-32">
          {/* Banner */}
          <div className=" rounded-lg border bg-black/15 w-full p-5 h-[400px]"></div>

          {/* About */}
          <div className="flex flex-col gap-14 items-center">
            <div className="flex flex-col sm:flex-row items-center gap-8">
              <div className="border bg-black/15 w-full sm:min-w-[300px] md:min-w-[400px] lg:min-w-[500px] aspect-video rounded-lg"></div>
              <div className="flex flex-col gap-4">
                <h1 className="text-xl font-semibold leading-8">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
                  nobis nulla eveniet doloribus obcaecati fugiat!
                </h1>
                <p className="text-sm text-neutral-500 leading-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                  quae nostrum expedita quibusdam dolorem consequatur porro nam
                  debitis deleniti neque, officia, eos aperiam. Autem sint
                  dignissimos labore repudiandae nisi possimus iusto
                  exercitationem. Cum maxime asperiores, omnis ipsum,
                  accusantium, expedita reiciendis qui quis adipisci nihil fugit
                  iste veniam eveniet? Recusandae, iste?
                </p>
              </div>
            </div>

            <div className="flex  flex-col-reverse sm:flex-row items-center gap-8">
              <div className="flex flex-col gap-4">
                <h1 className="text-xl font-semibold leading-8">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
                  nobis nulla eveniet doloribus obcaecati fugiat!
                </h1>
                <p className="text-sm text-neutral-500 leading-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                  quae nostrum expedita quibusdam dolorem consequatur porro nam
                  debitis deleniti neque, officia, eos aperiam. Autem sint
                  dignissimos labore repudiandae nisi possimus iusto
                  exercitationem. Cum maxime asperiores, omnis ipsum,
                  accusantium, expedita reiciendis qui quis adipisci nihil fugit
                  iste veniam eveniet? Recusandae, iste?
                </p>
              </div>
              <div className="border bg-black/15 w-full sm:min-w-[300px] md:min-w-[400px] lg:min-w-[500px] aspect-video rounded-lg"></div>
            </div>

            <div className="flex flex-wrap items-start justify-center gap-6 pt-8">
                <div className="border rounded-lg flex flex-col items-center gap-2 justify-center min-w-[275px] max-w-[300px] p-2 hover:bg-neutral-100 cursor-pointer">
                  <AudioWaveform className="text-purple-400 w-full w-[50px] h-[50px]" />
                  <h1 className=" text-lg font-semibold">Lorem ipsum dolor sit amet.</h1>
                  <p className="text-center text-sm text-neutral-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, doloremque quas beatae natus </p>
                </div>

                <div className="border rounded-lg flex flex-col items-center gap-2 justify-center min-w-[275px] max-w-[300px] p-2 hover:bg-neutral-100 cursor-pointer">
                  <Combine className="text-purple-400 w-full w-[50px] h-[50px]" />
                  <h1 className=" text-lg font-semibold">Lorem ipsum dolor sit amet.</h1>
                  <p className="text-center text-sm text-neutral-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, doloremque quas beatae natus </p>
                </div>

                <div className="border rounded-lg flex flex-col items-center gap-2 justify-center min-w-[275px] max-w-[300px] p-2 hover:bg-neutral-100 cursor-pointer">
                  <Cpu className="text-purple-400 w-full w-[50px] h-[50px]" />
                  <h1 className=" text-lg font-semibold">Lorem ipsum dolor sit amet.</h1>
                  <p className="text-center text-sm text-neutral-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, doloremque quas beatae natus </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
