import project2img from "@/public/project_2.png";
import useInView from "../_hooks/useInView";
import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";

function Project_2() {
  const { ref, visible } = useInView();

  return (
    <div
      ref={ref}
      className="md:flex  items-center justify-end relative gap-5 md:border-0 border-2 border-text-2 md:bg-bg bg-bg-2 shadow-sm md:shadow-none rounded-2xl md:rounded-none"
    >
      <figure
        className={`md:max-w-[65%] w-full  md:border-2 border-accent  h-auto overflow-hidden rounded-t-2xl  md:rounded-2xl animate__animated ${
          visible ? "animate__fadeIn animate__delay-1s" : "opacity-0"
        }`}
      >
        <Image
          src={project2img}
          alt="project-2 Image"
          width={800}
          height={800}
          className="w-full h-full object-cover object-top "
        />
      </figure>
      <div
        className={`flex flex-col items-start md:absolute   gap-3 left-0 md:p-0 p-3 animate__animated ${
          visible ? "animate__fadeInLeft" : "opacity-0"
        }`}
      >
        <h2 className="text-text md:text-[22px] text-[18px]  md:max-w-2xs ">
          NCC Level 5 Computing Project (Client Side)
        </h2>
        <p className="md:bg-bg-2 max-w-125 text-[14px] md:text-base md:border border-text-2 md:p-5 md:rounded-3xl shadow-none md:shadow-lg ">
          <span className="text-accent">Flight Ticket Booking Website </span>{" "}
          where users can search and book flights through an intuitive
          interface, view available airlines and schedules, and manage their
          bookings with real-time, database-driven results.
        </p>
        <div>
          <div className="flex gap-6 mb-3 md:text-lg text-[16px] t font-medium justify-between">
            <span>Next.js</span>
            <span>Javascript</span>
            <span>Tailwind</span>
            <span>Prisma</span>
          </div>
          <div className="flex gap-3 items-center text-accent">
            <Link
              href={"https://github.com/TinHtunOo/Sky-Reserve"}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg hover:bg-text-muted"
            >
              <Github />
            </Link>
            <Link
              href={"https://sky-reserve-nine.vercel.app/"}
              target="_blank"
              rel="noopener noreferrer"
              className=" rounded-lg hover:bg-text-muted"
            >
              <ArrowUpRight size={35} strokeWidth={1.5} />
            </Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project_2;
