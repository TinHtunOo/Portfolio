"use client";

import useInView from "@/app/_hooks/useInView";
import Project_1 from "./Project_1";
import Project_2 from "./Project_2";
import Project_3 from "./Project_3";
import Project_4 from "./Project_4";

function ProjectsSection() {
  const { ref, visible } = useInView();

  return (
    <div ref={ref} id="project" className="pt-15 pb-15">
      <h1
        className={`text-3xl font-bold mb-10 sm:text-left text-center animate__animated  ${
          visible ? "animate__fadeIn " : "opacity-0"
        }`}
      >
        Projects
      </h1>
      {/* image left */}

      <Project_1 />
      <div className="h-23"></div>
      <Project_2 />
      <div className="h-23"></div>
      <Project_3 />
      <div className="h-23"></div>
      <Project_4 />
    </div>
  );
}

export default ProjectsSection;
