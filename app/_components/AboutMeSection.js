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
    <div ref={ref} id="about_me" className="pt-15 pb-15">
      <h1
        className={`text-3xl mb-10  flex-1 whitespace-nowrap font-bold sm:text-left text-center  animate__animated  ${
          visible ? "animate__fadeIn " : "opacity-0"
        }`}
      >
        About Me
      </h1>
      <div className="flex gap-15 items-center justify-center md:flex-nowrap flex-wrap">
        <figure
          className={`min-w-75  md:aspect-auto aspect-square  h-auto overflow-hidden rounded-2xl animate__animated ${
            visible ? "animate__fadeIn " : "opacity-0"
          }`}
        >
          <Image
            src={profile}
            alt="profile"
            width={300}
            height={300}
            className="w-full h-full object-cover object-top"
          />
        </figure>
        <div
          className={`animate__animated border-l-2 pl-4 border-accent ${
            visible ? "animate__fadeInRight animate__delay-1s" : "opacity-0"
          }`}
        >
          <p className=" text-text-muted md:text-lg text-base ">
            I am <span className="text-accent">Tin Htun Oo,</span> a Front-End
            Developer with a <span className="text-accent">Mechatronics</span>{" "}
            background from Technological University(Hmawbi). My journey in
            programming began with <span className="text-accent">Python,</span>{" "}
            and over time I found myself passionate about building things for
            the web.
            <br />
            <br />I pursued the <span className="text-accent">NCC</span> IT
            pathway to expand my skills and move towards a{" "}
            <span className="text-accent"> Bachelor’s in Computing</span> — now
            I specialize in building modern, responsive web interfaces using
            React, Next.js, and Tailwind CSS. <br />
            <br />
            Here are a few technologies I’ve been working with recently:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3  gap-4 md:mt-10 mt-5 md:text-lg text-base text-text">
            {skills.map((skill) => (
              <div key={skill.name} className="flex gap-3 items-center">
                <Image src={skill.logo} alt={"logo"} width={25} height={25} />

                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMeSection;
