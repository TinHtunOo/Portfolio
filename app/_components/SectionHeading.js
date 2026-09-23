function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  visible,
}) {
  const centered = align === "center";
  const reveal =
    visible === undefined
      ? ""
      : `transition-all duration-700 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`;

  return (
    <div className={`mb-12 ${centered ? "text-center" : "text-left"} ${reveal}`}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
        {title}
      </h2>
      <div
        className={`mt-4 h-px w-16 rounded-full bg-accent ${
          centered ? "mx-auto" : ""
        }`}
      />
      {description && (
        <p
          className={`mt-4 max-w-xl text-text-muted ${
            centered ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;