"use client";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import useInView from "../_hooks/useInView";

function SomeWorkSection() {
  const { ref, visible } = useInView();
  return (
    <div ref={ref} className="pt-15 pb-15">
      <h1
        className={`text-3xl font-bold mb-10 text-center animate__animated ${
          visible ? "animate__fadeIn" : "opacity-0"
        }`}
      >
        Some of My Work
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 md:mt-10 mt-5 mb-15 ">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className={`p-5 bg-bg-2 rounded-3xl shadow-sm  animate__animated project_card ${
              visible ? `animate__fadeIn animate__delay-${index}s` : "opacity-0"
            }`}
          >
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-[22px] font-medium">Grill Resturance</h2>
              <ArrowUpRight size={35} strokeWidth={1.5} />
            </div>
            <p className="text-text-muted text-[14px] md:text-[16px] mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi
            </p>
            <div className="flex gap-2 mb-3 text-lg font-medium flex-wrap">
              <span>php</span>
              <span>javascript</span>
              <span>tailwind</span>
              <span>mySql</span>
            </div>
          </div>
        ))}{" "}
      </div>
      <button className="flex items-center gap-2  text-lg hover:border-black border-b-2 border-white m-auto">
        View All Works <ArrowRight />
      </button>
    </div>
  );
}

export default SomeWorkSection;
