"use client";
import useInView from "../_hooks/useInView";
import metroImg from "@/public/metro-security.png";
import FreelanceProject from "./FreelenceProject";
import SectionHeading from "./SectionHeading";

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
    <section ref={ref} className="pb-16 pt-8">
      <SectionHeading
        eyebrow="Client Work"
        title="Freelance Projects"
        visible={visible}
      />

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