import Image from "next/image";
import project1img from "@/public/project_1.png";
import useInView from "../_hooks/useInView";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";

function Project_1() {
  const { ref, visible } = useInView();
  return (
    <div
      ref={ref}
      className="md:flex items-center relative gap-5 block md:border-0 border-2 border-text-2 md:bg-bg bg-bg-2 rounded-2xl md:rounded-none shadow-sm md:shadow-none"
    >
      <figure
        className={`md:max-w-[65%] w-full  left-0 top-0 md:border-2 border-accent h-auto overflow-hidden rounded-t-2xl  md:rounded-2xl animate__animated ${
          visible ? "animate__fadeIn animate__delay-1s" : "opacity-0"
        }`}
      >
        <Image
          src={project1img}
          alt="project-1 Image"
          width={800}
          height={800}
          className="w-full h-full object-cover object-top "
        />
      </figure>
      <div
        className={`flex flex-col md:items-end items-start md:absolute   gap-3 md:right-0 left-0 md:p-0 p-3 animate__animated ${
          visible ? "animate__fadeInRight " : "opacity-0"
        }`}
      >
        <h2 className="text-text md:text-[22px] text-[18px] md:text-right md:max-w-2xs ">
          NCC Level 5 Backend Web Development Project
        </h2>
        <p className="md:bg-bg-2 max-w-125 text-[14px] md:text-base md:border border-text-2  md:p-5 md:rounded-3xl shadow-none md:shadow-lg">
          A <span className="text-accent">full-stack web application</span> for
          sharing recipes, exploring culinary content, and engaging with a
          food-focused community through secure, database-driven features.
        </p>
        <div>
          <div className="flex gap-6 mb-3 md:text-lg text-[16px] t font-medium justify-between">
            <span>PHP</span>
            <span>Javascript</span>
            <span>Tailwind</span>
            <span>MySql</span>
          </div>
          <div className="flex gap-3 md:justify-end items-center text-accent">
            <Link
              href={"https://github.com/TinHtunOo/Food-Fusion"}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg hover:bg-text-muted"
            >
              <Github />
            </Link>
            <Link
              href={"https://foodfusion-tho.infinityfreeapp.com/"}
              target="_blank"
              rel="noopener noreferrer"
              className=" rounded-lg hover:bg-text-muted"
            >
              <ArrowUpRight size={35} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project_1;
