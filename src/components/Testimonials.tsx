import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
import { Reveal } from "./ui/Reveal";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";

export function Testimonials() {
  return (
    <section id="opiniones" className="bg-surface py-28 sm:py-36">
      <Container>
        <SectionHeading eyebrow="Testimonios" title="Lo que dicen nuestros comensales" />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <figure className="flex h-full flex-col rounded-2xl border border-border p-8">
                <Quote className="text-accent" size={28} />
                <blockquote className="mt-6 flex-1 text-base leading-relaxed text-foreground/85">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <p className="font-serif-display text-lg">{t.name}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
