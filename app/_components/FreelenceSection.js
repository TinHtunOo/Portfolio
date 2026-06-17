"use client";
import useInView from "../_hooks/useInView";
import metroImg from "@/public/metro-security.png";
import FreelanceProject from "./FreelenceProject";

const projects = [
  {
    id: "metro-security",
    title: "Metro Security Singapore",
    description:
      "Designed and developed a modern corporate website for a Singapore-based security services company. The website focuses on clear service presentation, responsive design, performance optimization, and lead generation to strengthen the company's online presence.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Responsive Design"],
    year: "2026",
    client: "Singapore Security Company",
    href: "https://metrosecuritysg.com/",
    image: metroImg,
    imageAlt: "Metro Security Singapore",
  },
];

function FreelanceSection() {
  const { ref, visible } = useInView();

  return (
    <section
      ref={ref}
      className={`py-20 animate__animated ${
        visible ? "animate__fadeInUp" : "opacity-0"
      }`}
    >
      {/* Section Header */}
      <div className="mb-12">
        <h2 className="text-text text-3xl font-bold mt-3 leading-tight">
          Freelance Projects
        </h2>
        <div className="mt-4 h-px w-16 bg-accent rounded-full" />
      </div>

      {/* Project Cards */}
      <div className="flex flex-col gap-8">
        {projects.map((project) => (
          <FreelanceProject key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}

export default FreelanceSection;
