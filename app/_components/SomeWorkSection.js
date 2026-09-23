"use client";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import useInView from "../_hooks/useInView";
import SectionHeading from "./SectionHeading";

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
  {
    name: "Blackjack",
    description:
      "A blackjack game with a hand-built rules engine (deck, hand values, splits, double downs, dealer), and per-session play so multiple people can play independently. ",
    techStack: ["React", "Tailwind", "Node.js", "Express"],
    liveLink: "https://blackjack-v1999.vercel.app/",
    gitLink: "https://github.com/TinHtunOo/Blackjack_V1",
  },
];

function SomeWorkSection() {
  const { ref, visible } = useInView();

  return (
    <div ref={ref} className="pb-24 pt-8">
      <SectionHeading
        eyebrow="More Work"
        title="Some of My Work"
        visible={visible}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={project.name}
            style={{ transitionDelay: `${index * 60}ms` }}
            className={`group flex flex-col rounded-2xl border border-border bg-bg p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg ${
              visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            {/* Header */}
            <div className="mb-2 flex items-start justify-between">
              <h2 className="text-[17px] font-semibold">{project.name}</h2>
              <span className="text-sm text-text-2">0{index + 1}</span>
            </div>

            {/* Description */}
            <p className="mb-4 flex-1 text-[13px] leading-relaxed text-text-muted">
              {project.description}
            </p>

            {/* Tech stack */}
            <div className="mb-5 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border bg-bg-1 px-2.5 py-1 text-[11px] text-text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex items-center gap-2 border-t border-border pt-4">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-lg bg-text px-3 py-1.5 text-xs font-medium text-white transition hover:bg-accent"
              >
                <ExternalLink size={12} /> Live demo
              </a>
              <a
                href={project.gitLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-text transition hover:border-accent hover:text-accent"
              >
                <Github size={12} /> Source
              </a>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.name} in a new tab`}
                className="ml-auto flex h-8 w-8 items-center justify-center rounded-lg text-text-2 transition hover:bg-accent hover:text-white"
              >
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SomeWorkSection;
