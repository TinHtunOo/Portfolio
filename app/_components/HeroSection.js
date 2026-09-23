import { ArrowRight } from "lucide-react";
import Link from "next/link";

function HeroSection() {
  return (
    <section className="relative flex min-h-svh items-center overflow-hidden">
      {/* Decorative background accents */}
      <div
        aria-hidden
        className="anim-float pointer-events-none absolute -right-32 -top-32 h-[480px] w-[480px] rounded-full bg-accent/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full bg-accent/5 blur-3xl"
      />

      <div className="relative w-full py-16 text-center sm:text-left md:space-y-6">
        <p
          className="anim-fade-up mb-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-text-muted"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="inline-block h-2 w-2 rounded-full bg-accent" />
          Hi, my name is
        </p>

        <h1
          className="anim-fade-up title font-black text-text"
          style={{ animationDelay: "0.4s" }}
        >
          Tin Htun Oo
        </h1>

        <h2
          className="anim-fade-up title-2 font-black text-accent md:mt-2"
          style={{ animationDelay: "0.6s" }}
        >
          Front-End Developer
        </h2>

        <p
          className="anim-fade-up mx-auto max-w-2xl text-sm leading-6 text-text-muted sm:mx-0 sm:text-[18px]"
          style={{ animationDelay: "0.8s" }}
        >
          I build fast, responsive, and user-friendly web applications using
          React, Next.js, and modern UI design.
        </p>

        <div
          className="anim-fade-up mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-start"
          style={{ animationDelay: "1s" }}
        >
          <Link
            href="#project"
            className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-text px-8 py-4 text-base font-semibold text-white transition hover:bg-accent sm:w-auto"
          >
            My Projects
            <ArrowRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
          <Link
            href="#about_me"
            className="inline-flex w-full items-center justify-center gap-3 rounded-full border-2 border-text/15 px-8 py-4 text-base font-semibold text-text transition hover:border-accent hover:text-accent sm:w-auto"
          >
            More about me
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;