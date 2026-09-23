import project1img from "@/public/project_1.png";
import project2img from "@/public/project_2.png";
import project3img from "@/public/project_3.png";
import project4img from "@/public/project_4.png";
import FeaturedProject from "./FeaturedProject";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    align: "left",
    title: "NCC Level 5 Backend Web Development Project",
    description: (
      <>
        A <span className="text-accent">full-stack web application</span> for
        sharing recipes, exploring culinary content, and engaging with a
        food-focused community through secure, database-driven features.
      </>
    ),
    stack: ["PHP", "JavaScript", "Tailwind", "MySQL"],
    github: "https://github.com/TinHtunOo/Food-Fusion",
    live: "https://foodfusion-tho.infinityfreeapp.com/",
    image: project1img,
    alt: "Food Fusion recipe sharing app",
  },
  {
    align: "right",
    title: "Flight Ticket Booking Website",
    description: (
      <>
        <span className="text-accent">Client side</span> of a flight booking
        platform where users search and book flights, browse airlines and
        schedules, and manage bookings with real-time, database-driven results.
      </>
    ),
    stack: ["Next.js", "JavaScript", "Tailwind", "Prisma"],
    github: "https://github.com/TinHtunOo/Sky-Reserve",
    live: "https://sky-reserve-nine.vercel.app/",
    image: project2img,
    alt: "Sky Reserve flight booking app",
  },
  {
    align: "left",
    title: "Flight Ticket Booking Admin Dashboard",
    description: (
      <>
        <span className="text-accent">Admin side</span> of the flight booking
        website. Administrators manage airlines, flights, schedules, and
        bookings through a secure dashboard.
      </>
    ),
    stack: ["Next.js", "JavaScript", "Tailwind", "Prisma"],
    github: "https://github.com/TinHtunOo/Sky-Reserve",
    live: "https://sky-reserve-nine.vercel.app/adminLogin",
    image: project3img,
    alt: "Sky Reserve admin dashboard",
  },
  {
    align: "right",
    title: "Oway — Myanmar Heritage Fashion E-Commerce",
    description: (
      <>
        A <span className="text-accent">full-stack e-commerce platform</span>{" "}
        for Oway, a premium Myanmar longyi brand blending traditional heritage
        with modern fashion — complete with a chatbot.
      </>
    ),
    stack: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
    github: "https://github.com/TinHtunOo/Oway_E_commerce",
    live: "https://oway-lime.vercel.app/",
    image: project4img,
    alt: "Oway e-commerce store",
  },
];

function ProjectsSection() {
  return (
    <section id="project" className="pb-24 pt-10">
      <SectionHeading eyebrow="Portfolio" title="Featured Projects" />

      <div className="flex flex-col gap-14 md:gap-20">
        {projects.map((project, index) => (
          <FeaturedProject
            key={project.title}
            {...project}
            number={`0${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;