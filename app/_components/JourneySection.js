"use client";
import useInView from "../_hooks/useInView";
import SectionHeading from "./SectionHeading";

const timeline = [
  {
    year: "2019",
    title: "Finished Mechatronics Engineering",
    place: "Technological University (Hmawbi)",
  },
  {
    year: "2021",
    title: "Learned Python & Programming Basics",
    place: "Self-driven learning",
  },
  {
    year: "2023",
    title: "Began NCC Education for Computing Degree",
    place: "NCC Education",
  },
  {
    year: "2025",
    title: "Finished Level 5 Diploma in Computing",
    place: "NCC Education",
  },
];

function JourneySection() {
  const { ref, visible } = useInView();

  return (
    <div ref={ref} id="journey" className="pb-24 pt-8">
      <SectionHeading
        eyebrow="Timeline"
        title="Journey"
        visible={visible}
      />

      <div className="relative mx-auto max-w-4xl">
        {/* Center line */}
        <span
          aria-hidden
          className="absolute bottom-3 left-5 top-3 w-0.5 -translate-x-1/2 bg-gradient-to-b from-accent via-accent/40 to-border md:left-1/2"
        />

        <ol className="space-y-10 md:space-y-14">
          {timeline.map((item, i) => {
            const onLeft = i % 2 === 0;
            return (
              <li
                key={item.year}
                className={`relative pl-14 md:w-1/2 md:pl-0 ${
                  onLeft ? "md:pr-14 md:text-right" : "md:ml-auto md:pl-14"
                }`}
              >
                {/* Dot on the line */}
                <span
                  aria-hidden
                  className={`absolute left-5 top-2 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-accent ring-4 ring-accent/20 md:left-0 ${
                    onLeft
                      ? "md:left-auto md:right-0 md:translate-x-1/2"
                      : "md:-translate-x-1/2"
                  } ${i === timeline.length - 1 ? "ring-accent/40" : ""}`}
                />

                <article
                  className={`rounded-2xl border border-border bg-bg-2 p-5 shadow-sm transition-all duration-700 hover:border-accent/60 hover:shadow-md md:p-6 ${
                    visible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-6 opacity-0"
                  }`}
                  style={{ transitionDelay: `${i * 80 + 200}ms` }}
                >
                  <span className="inline-flex items-center rounded-full border border-border bg-bg px-3 py-1 text-xs font-semibold text-accent">
                    {item.year}
                  </span>
                  <h3 className="mt-3 text-base font-semibold leading-snug text-text md:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-text-muted">{item.place}</p>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default JourneySection;