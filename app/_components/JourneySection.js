"use client";
import useInView from "../_hooks/useInView";

function JourneySection() {
  const { ref, visible } = useInView();

  return (
    <div ref={ref} id="journey" className="pt-15 pb-15">
      <h1
        className={`text-3xl font-bold mb-10 sm:text-left text-center animate__animated ${
          visible ? "animate__fadeIn " : "opacity-0"
        }`}
      >
        Journey
      </h1>
      <div
        className={` hidden sm:grid grid-cols-5 grid-rows-2  text-[14px] animate__animated timeline ${
          visible ? "animate__fadeIn animate__delay-1s" : "opacity-0"
        }`}
      >
        <div className="border-r border-b border-text-2  h-40 flex items-center justify-end text-right p-2 relative">
          <span
            className={`animate__animated timeline ${
              visible ? "animate__fadeIn animate__delay-2s" : "spacity-0"
            }`}
          >
            Finished Mechatronics Engineering at TU(Hmawbi)
          </span>
          <div className="absolute w-2 h-2 rounded-4xl bg-text top-0 -right-1"></div>
          <div className="absolute w-2 h-2 rounded-4xl bg-text -bottom-1 -right-1"></div>
          <div className="absolute w-2 h-2 rounded-4xl bg-text -bottom-1 -left-1"></div>
        </div>
        <div className="border-b border-text-2  h-40 p-2 text-2xl font-semibold">
          <span
            className={`animate__animated timeline text-accent ${
              visible ? "animate__fadeIn animate__delay-2s" : "spacity-0"
            }`}
          >
            2019
          </span>
        </div>
        <div className="border-b border-r border-text-2  h-40 flex items-center justify-end text-right p-2 relative">
          <span
            className={`animate__animated timeline ${
              visible ? "animate__fadeIn animate__delay-4s" : "spacity-0"
            }`}
          >
            Began NCC Education for Computing Degree
          </span>
          <div className="absolute w-2 h-2 rounded-4xl bg-text top-0 -right-1"></div>
          <div className="absolute w-2 h-2 rounded-4xl bg-text -bottom-1 -right-1"></div>
          <div className="absolute w-2 h-2 rounded-4xl bg-text -bottom-1 -left-1 z-5"></div>
        </div>
        <div className="border-b  border-text-2  h-40 p-2 text-2xl font-semibold">
          <span
            className={`animate__animated timeline text-accent ${
              visible ? "animate__fadeIn animate__delay-4s" : "spacity-0"
            }`}
          >
            2023
          </span>
        </div>
        <div className="border-b  border-text-2  h-40"></div>
        <div className=" border-text-2  h-40"></div>
        <div className=" border-r border-text-2  h-40 flex items-center justify-end text-right p-2 relative">
          <span
            className={`animate__animated timeline ${
              visible ? "animate__fadeIn animate__delay-3s" : "spacity-0"
            }`}
          >
            Learned Python & programming basics{" "}
          </span>
          <div className="absolute w-2 h-2 rounded-4xl bg-text bottom-0 -right-1"></div>
        </div>{" "}
        <div className=" border-text-2  h-40 p-2 text-2xl font-semibold flex items-end">
          <span
            className={`animate__animated timeline text-accent ${
              visible ? "animate__fadeIn animate__delay-3s" : "spacity-0"
            }`}
          >
            2021
          </span>
        </div>
        <div className="border-r border-text-2  h-40 flex items-center justify-end text-right p-2 relative">
          <span
            className={`animate__animated timeline ${
              visible ? "animate__fadeIn animate__delay-5s" : "spacity-0"
            }`}
          >
            Finished Level 5 Diploma in Computing
          </span>
        </div>
        <div className=" border-text-2  h-40 p-2 text-2xl font-semibold flex items-end relative">
          <span
            className={`animate__animated timeline text-accent ${
              visible ? "animate__fadeIn animate__delay-5s" : "spacity-0"
            }`}
          >
            2025
          </span>
          <div className="absolute w-2 h-2 rounded-4xl bg-text -top-1 -left-1"></div>
          <div className="absolute w-2 h-2 rounded-4xl bg-text -top-1 -right-1"></div>
          <div className="absolute w-2 h-2 rounded-4xl bg-text -bottom-1 -left-1 z-5"></div>
        </div>
      </div>
      {/* Mobile timeline */}
      <div className=" sm:hidden grid grid-cols-3 grid-rows-4  text-[14px]">
        <div className=" border-r text-accent relative border-text-2 h-30 flex items-center justify-end p-3 text-2xl font-semibold">
          2019
          <div className="w-2 h-2 bg-text rounded-3xl absolute -right-1"></div>
        </div>
        <div className="col-span-2 p-3 flex items-center">
          {" "}
          Finished Mechatronics Engineering at TU(Hmawbi)
        </div>
        <div className=" border-r text-accent relative border-text-2 h-30 flex items-center justify-end p-3 text-2xl font-semibold">
          2021
          <div className="w-2 h-2 bg-text rounded-3xl absolute -right-1"></div>
        </div>
        <div className="col-span-2 p-3 flex items-center">
          Learned Python & programming basics{" "}
        </div>
        <div className=" border-r text-accent relative border-text-2 h-30 flex items-center justify-end p-3 text-2xl font-semibold">
          2023
          <div className="w-2 h-2 bg-text rounded-3xl absolute -right-1"></div>
        </div>
        <div className="col-span-2 p-3 flex items-center">
          Began NCC Education for Computing Degree{" "}
        </div>
        <div className=" border-r text-accent relative border-text-2 h-30 flex items-center justify-end p-3 text-2xl font-semibold">
          2025
          <div className="w-2 h-2 bg-text rounded-3xl absolute -right-1"></div>
        </div>
        <div className="col-span-2 p-3 flex items-center">
          Finished Level 5 Diploma in Computing{" "}
        </div>
      </div>
    </div>
  );
}

export default JourneySection;
