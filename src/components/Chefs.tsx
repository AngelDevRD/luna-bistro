import Image from "next/image";
import { CHEFS } from "@/lib/data";
import { Reveal } from "./ui/Reveal";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";

export function Chefs() {
  return (
    <section id="chefs" className="py-28 sm:py-36">
      <Container>
        <SectionHeading
          eyebrow="Nuestro equipo"
          title="Conoce a nuestros chefs"
          description="El talento detrás de cada experiencia en Luna Bistro."
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {CHEFS.map((chef, i) => (
            <Reveal key={chef.name} delay={i * 0.1}>
              <article className="text-center">
                <div className="relative mx-auto aspect-square w-40 overflow-hidden rounded-full sm:w-48">
                  <Image
                    src={chef.image}
                    alt={chef.name}
                    fill
                    className="object-cover"
                    sizes="192px"
                  />
                </div>
                <h3 className="mt-6 font-serif-display text-xl">{chef.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-accent">{chef.role}</p>
                <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-muted">{chef.bio}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
