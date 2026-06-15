import Image from "next/image";
import project5img from "@/public/project_5.png";
import useInView from "../_hooks/useInView";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";

function Project_5() {
  const { ref, visible } = useInView();
  return (
    <div
      ref={ref}
      className="md:flex items-center relative gap-5 block md:bg-bg md:border-0 border-2 border-text-2 bg-bg-2 rounded-2xl md:rounded-none shadow-sm md:shadow-none"
    >
      <figure
        className={`md:max-w-[65%] w-full  left-0 top-0 md:border-2 border-accent  h-auto overflow-hidden rounded-t-2xl  md:rounded-2xl animate__animated ${
          visible ? "animate__fadeIn animate__delay-1s" : "opacity-0"
        }`}
      >
        <Image
          src={project5img}
          alt="project-5 Image"
          width={800}
          height={800}
          className="w-full h-full object-cover object-top "
        />
      </figure>
      <div
        className={`flex flex-col md:items-end items-start md:absolute  gap-3 md:right-0 left-0 md:p-0 p-3 animate__animated ${
          visible ? "animate__fadeInRight " : "opacity-0"
        }`}
      >
        <h2 className="text-text md:text-[22px] text-[18px] md:text-right md:max-w-2xs ">
          RAG Search App
        </h2>
        <p className="md:bg-bg-2 md:border border-text-2 max-w-125 text-[14px] md:text-base  md:p-5 md:rounded-3xl shadow-none md:shadow-lg">
          <span className="text-accent">A RAG Search App </span>lets you upload
          your own documents and ask questions about them in plain English.
          Instead of keyword matching, it uses AI to understand the meaning of
          your query, finds the most relevant passages from your files, and
          generates a grounded, accurate answer which are backed by your actual
          content, not the AI&apos;s training data.
        </p>
        <div>
          <div className="flex gap-6 mb-3 md:text-lg text-[16px] t font-medium justify-between">
            <span>Next.js</span>
            <span>Supabase</span>
            <span>Google Gemini</span>
          </div>
          <div className="flex gap-3 md:justify-end items-center text-accent">
            <Link
              href={"https://github.com/TinHtunOo/rag-search-app.git"}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg hover:bg-text-muted"
            >
              <Github />
            </Link>
            <Link
              href={"https://rag-search-app-phi.vercel.app/"}
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

export default Project_5;
