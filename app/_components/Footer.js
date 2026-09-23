import { ArrowUpRight, Github, Mail, Phone } from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="mt-16 bg-text text-white">
      <div className="mx-auto max-w-275 px-2 py-16 sm:px-10 md:py-20">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight md:text-[45px]">
              TinHtun<span className="text-accent">Oo.</span>
            </h1>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-text-2">
              Front-End Developer crafting fast, accessible, and delightful web
              experiences.
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <Link
              href="https://github.com/TinHtunOo"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-fit items-center gap-2 uppercase tracking-wide text-white/80 transition hover:text-accent"
            >
              <Github size={18} />
              github
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
            <a
              href="mailto:tinhtun1999@gmail.com"
              className="group inline-flex w-fit items-center gap-2 transition hover:text-accent"
            >
              <Mail size={18} />
              tinhtun1999@gmail.com
            </a>
            <a
              href="tel:+669148469"
              className="group inline-flex w-fit items-center gap-2 transition hover:text-accent"
            >
              <Phone size={18} />
              +66 914 8469
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-text-2 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} Tin Htun Oo. All rights reserved.
          </span>
          <span className="hidden sm:block">
            Designed & built with Next.js and Tailwind CSS
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;