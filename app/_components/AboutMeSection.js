"use client";

import Image from "next/image";
import profile from "@/public/profile.jpg";
import javascript from "@/public/javascript.svg";
import react from "@/public/react.svg";
import nextjs from "@/public/nextjs.svg";
import tailwind from "@/public/tailwind.svg";
import mysql from "@/public/mysql.svg";
import styledcomponents from "@/public/styled-components.svg";
import useInView from "@/app/_hooks/useInView";
import SectionHeading from "./SectionHeading";

const skills = [
  { name: "JavaScript", logo: javascript },
  { name: "React", logo: react },
  { name: "Next.js", logo: nextjs },
  { name: "Tailwind CSS", logo: tailwind },
  { name: "MySQL", logo: mysql },
  { name: "Styled Components", logo: styledcomponents },
];

function AboutMeSection() {
  const { ref, visible } = useInView();

  return (
    <div ref={ref} id="about_me" className="pb-24 pt-8">
      <SectionHeading
        eyebrow="Who I am"
        title="About Me"
        visible={visible}
      />

      <div className="flex flex-wrap items-center justify-center gap-12 md:flex-nowrap md:gap-16">
        {/* Photo */}
        <div
          className={`relative transition-all duration-700 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div
            aria-hidden
            className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl border-2 border-accent/50"
          />
          <figure className="relative overflow-hidden rounded-2xl border-2 border-accent/50 shadow-lg">
            <Image
              src={profile}
              alt="Profile photo of Tin Htun Oo"
              width={360}
              height={400}
              className="h-auto w-full max-w-[360px] object-cover object-top"
            />
          </figure>
        </div>

        {/* Bio */}
        <div
          className={`max-w-xl border-l-2 border-accent pl-4 transition-all duration-700 md:pl-6 ${
            visible ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"
          }`}
        >
          <p className="text-base leading-relaxed text-text-muted md:text-lg">
            I am <span className="font-semibold text-accent">Tin Htun Oo,</span>{" "}
            a Front-End Developer with a{" "}
            <span className="font-semibold text-accent">Mechatronics</span>{" "}
            background from Technological University (Hmawbi). My journey in
            programming began with{" "}
            <span className="font-semibold text-accent">Python,</span> and over
            time I found myself passionate about building things for the web.
            <br />
            <br />
            I pursued the <span className="font-semibold text-accent">NCC</span>{" "}
            IT pathway to expand my skills and move towards a{" "}
            <span className="font-semibold text-accent">
              Bachelor&apos;s in Computing
            </span>{" "}
            — now I specialize in building modern, responsive web interfaces
            using React, Next.js, and Tailwind CSS.
            <br />
            <br />
            Here are a few technologies I&apos;ve been working with recently:
          </p>

          <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:mt-10">
            {skills.map((skill) => (
              <li
                key={skill.name}
                className="flex items-center gap-3 rounded-full border border-border bg-bg-1 px-4 py-2.5 text-sm font-medium text-text transition hover:border-accent"
              >
                <Image
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  width={22}
                  height={22}
                  className="h-5 w-5 object-contain"
                />
                <span>{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutMeSection;