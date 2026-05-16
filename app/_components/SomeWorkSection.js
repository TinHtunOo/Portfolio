"use client";
import { ExternalLink, Github } from "lucide-react";
import useInView from "../_hooks/useInView";

const projects = [
  {
    name: "TaskFlow",
    description:
      "A modern task management application with filtering, sorting, dark mode, and persistent state.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind"],
    liveLink: "https://task-track-lilac-iota.vercel.app/",
    gitLink: "https://github.com/TinHtunOo/TaskTrack",
  },
  {
    name: "DailyCast",
    description:
      "A responsive weather application with current conditions, a 24-hour hourly forecast, and a 5-day outlook using real-time API data.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    liveLink: "https://daily-cast.vercel.app/",
    gitLink: "https://github.com/TinHtunOo/DailyCast",
  },
  {
    name: "EasyExpense",
    description:
      "A personal finance app for tracking income and expenses with category breakdowns and interactive doughnut charts.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind"],
    liveLink: "https://easyexpense.vercel.app/",
    gitLink: "https://github.com/TinHtunOo/EasyExpense",
  },
  {
    name: "NotesApp",
    description:
      "A rich-text notes app with markdown editing, tagging, and real-time search — optimized with React.memo and custom hooks.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    liveLink: "https://note-kit.vercel.app/",
    gitLink: "https://github.com/TinHtunOo/NoteKit",
  },
  {
    name: "AuthSystem",
    description:
      "A production-ready auth system with email verification, password reset, JWT, and HTTP-only cookies, built on Next.js 15.",
    techStack: ["Next.js", "TypeScript", "Prisma", "Tailwind"],
    liveLink: "https://auth-system-omega-ecru.vercel.app/",
    gitLink: "https://github.com/TinHtunOo/Auth-System",
  },
];

function SomeWorkSection() {
  const { ref, visible } = useInView();

  return (
    <div ref={ref} className="pt-15 pb-15">
      <h1
        className={`text-3xl font-bold mb-10 text-center animate__animated ${
          visible ? "animate__fadeIn" : "opacity-0"
        }`}
      >
        Some of My Work
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10 mb-15">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col p-5 bg-bg rounded-2xl border border-accent hover:shadow-md transition-colors animate__animated ${
              visible ? `animate__fadeIn animate__delay-${index}s` : "opacity-0"
            }`}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-2">
              <h2 className="text-[17px] font-medium">{project.name}</h2>
              <span className="text-xs text-text-muted">0{index + 1}</span>
            </div>

            {/* Description */}
            <p className="text-text-muted text-[13px] leading-relaxed flex-1 mb-4">
              {project.description}
            </p>

            {/* Tech stack */}
            <div className="flex gap-2 flex-wrap mb-5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] px-2 py-1 rounded-full bg-bg-1 border border-border text-text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-2 border-t border-border pt-4">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-text text-bg-2 hover:opacity-85 transition-opacity"
              >
                <ExternalLink size={12} /> Live demo
              </a>
              <a
                href={project.gitLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border border-text hover:bg-bg transition-colors"
              >
                <Github size={12} /> Source
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SomeWorkSection;
