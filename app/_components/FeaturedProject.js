"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import useInView from "@/app/_hooks/useInView";

function FeaturedProject({
  title,
  description,
  stack,
  github,
  live,
  image,
  alt,
  align = "left",
  number,
}) {
  const { ref, visible } = useInView();
  const imageRight = align === "right";

  return (
    <article
      ref={ref}
      className={`group grid overflow-hidden gap-y-2.5 rounded-3xl border border-border bg-white shadow-sm transition-all duration-700 hover:shadow-xl md:grid-cols-12 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      {/* Image */}
      <div
        className={`relative overflow-hidden bg-bg-2 md:col-span-7 ${
          imageRight ? "md:order-2" : "md:order-1"
        }`}
      >
        <Image
          src={image}
          alt={alt}
          width={1200}
          height={800}
          className="h-auto w-full object-cover object-top transition duration-700 group-hover:scale-105 md:h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
      </div>

      {/* Content */}
      <div
        className={`flex flex-col justify-center gap-5 p-7 md:col-span-5 md:p-10 ${
          imageRight ? "md:order-1" : "md:order-2"
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Featured Project
          </span>
          {number && (
            <span className="text-3xl font-black leading-none text-gray-300">
              {number}
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold leading-snug tracking-tight text-text md:text-2xl">
          {title}
        </h3>

        <p className="text-sm leading-relaxed text-text-muted">{description}</p>

        <ul className="flex flex-wrap gap-2">
          {stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-border bg-bg-1 px-3 py-1 text-xs font-medium text-text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap items-center gap-3 pt-1">
          {github && (
            <Link
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-bg px-4 py-2.5 text-sm font-semibold text-text transition hover:border-accent hover:text-accent"
            >
              <Github size={16} />
              Code
            </Link>
          )}
          <Link
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-accent/90 active:scale-95"
          >
            Live Demo
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default FeaturedProject;
