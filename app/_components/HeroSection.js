import { ArrowRight } from "lucide-react";
import Link from "next/link";

function HeroSection() {
  return (
    <section className="flex items-center h-screen ">
      <div className="md:space-y-7 space-y-4 text-center sm:text-left">
        <h2 className="font-medium sm:text-xl mb-1 text-text-muted text-[16px] animate__animated  animate__fadeIn animate__delay-2s">
          Hi, my name is
        </h2>
        <h1
          className="font-black title font-body tracking-tighter animate__animated animate__fadeInLeft animate__slower
"
        >
          Tin Htun Oo
        </h1>
        <h1 className="font-black title-2 font-body text-accent tracking-tighter animate__animated animate__fadeInRight animate__slower">
          Front-End Developer
        </h1>
        <p className="font-normal sm:text-[18px] max-w-2xl text-text-muted leading-6 text-[14px] animate__animated  animate__fadeIn animate__delay-2s">
          I build fast, responsive, and user-friendly web applications using
          React, Next.js, and modern UI design.
        </p>
        <Link
          href={"#project"}
          className=" flex relative group overflow-hidden mt-0 sm:-mt-3 sm:w-[192px] h-[54px] duration-1000 w-full bg-text font-medium sm:text-[18px] text-[16px] justify-center items-center px-8 py-3 rounded-4xl animate__animated  animate__fadeIn animate__delay-2s"
        >
          <div className="absolute top-0 group-hover:-translate-y-[54px] transition-transform duration-500">
            <span className="flex justify-center items-center w-[192px] bg-text text-white px-8 py-3">
              My Projects
              <ArrowRight size={"30"} />
            </span>
            <span className="flex w-[192px] justify-center items-center bg-accent text-white px-8 py-3">
              My Projects
              <ArrowRight size={"30"} />
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default HeroSection;
