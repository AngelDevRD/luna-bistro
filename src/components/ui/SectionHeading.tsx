import { clsx } from "clsx";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div className={clsx("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <Reveal>
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-accent">{eyebrow}</p>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2 className="font-serif-display text-4xl leading-tight sm:text-5xl">{title}</h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p className="mt-5 text-base leading-relaxed text-muted">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
