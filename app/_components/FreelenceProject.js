"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

function FreelanceProject({
  title,
  description,
  stack,
  year,
  client,
  href,
  image,
  imageAlt,
}) {
  return (
    <article className="group bg-bg-2 border border-text-2/20 rounded-3xl overflow-hidden transition-shadow duration-300 hover:shadow-[0_0_0_1px_var(--color-accent)/30]">
      <div className="grid lg:grid-cols-2">
        {/* Image */}
        <div className="relative overflow-hidden lg:max-h-[480px]">
          <Image
            src={image}
            alt={imageAlt}
            width={1200}
            height={800}
            className="w-full h-full object-cover object-top transition duration-700 group-hover:scale-105"
          />
          {/* Subtle gradient bleed into content on large screens */}
          <div className="hidden lg:block absolute inset-y-0 right-0 w-12 " />
        </div>

        {/* Content */}
        <div className="p-8 flex flex-col justify-between gap-8">
          <div>
            <h3 className="text-text text-2xl md:text-3xl font-bold leading-snug mb-4">
              {title}
            </h3>
            <p className="text-text-muted text-sm leading-relaxed">
              {description}
            </p>
          </div>

          {/* Stack */}
          <div className="flex flex-wrap gap-2">
            {stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-full bg-bg text-text text-xs font-medium border border-text-2/20 tracking-wide"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Meta */}
          <div className="grid grid-cols-2 gap-4 py-6 border-y border-text-2/10">
            <div>
              <p className="text-text-muted text-xs uppercase tracking-widest mb-1">
                Year
              </p>
              <p className="text-accent text-xl font-bold">{year}</p>
            </div>
            <div>
              <p className="text-text-muted text-xs uppercase tracking-widest mb-1">
                Client
              </p>
              <p className="text-text text-sm font-medium leading-snug">
                {client}
              </p>
            </div>
          </div>

          {/* CTA */}
          <div>
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-white text-sm font-medium px-5 py-3 rounded-xl hover:opacity-90 active:scale-95 transition duration-200"
            >
              Visit Website
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export default FreelanceProject;
