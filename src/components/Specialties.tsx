import Image from "next/image";
import { SPECIALTIES } from "@/lib/data";
import { Reveal } from "./ui/Reveal";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";

export function Specialties() {
  return (
    <section id="especialidades" className="bg-surface py-28 sm:py-36">
      <Container>
        <SectionHeading
          eyebrow="Especialidades"
          title="Los platos que nos definen"
          description="Una selección de nuestras creaciones más aclamadas, elaboradas con técnica e ingredientes de primer nivel."
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SPECIALTIES.map((dish, i) => (
            <Reveal key={dish.name} delay={i * 0.08}>
              <article className="group">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <div className="mt-4 flex items-start justify-between gap-3">
                  <h3 className="font-serif-display text-lg leading-tight">{dish.name}</h3>
                  <span className="whitespace-nowrap text-sm text-accent">{dish.price}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted">{dish.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
