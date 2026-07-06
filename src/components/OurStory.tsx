import Image from "next/image";
import { Reveal } from "./ui/Reveal";
import { Container } from "./ui/Container";

const PILLARS = [
  {
    title: "Cómo nació Luna Bistro",
    text: "En 2014, el chef Mateo Beltrán decidió crear un espacio donde la cocina de autor pudiera contarse como una historia: platos que evolucionan con las estaciones y honran el producto local.",
  },
  {
    title: "Un chef, una visión",
    text: "Formado en Le Cordon Bleu, Mateo lidera una cocina que combina técnica clásica francesa con ingredientes mexicanos, creando una identidad única en cada plato.",
  },
  {
    title: "Ingredientes frescos, siempre",
    text: "Trabajamos directamente con productores locales y mercados de temporada para garantizar que cada ingrediente llegue a la mesa en su punto óptimo.",
  },
];

export function OurStory() {
  return (
    <section id="historia" className="relative py-28 sm:py-36">
      <Container className="grid items-center gap-16 lg:grid-cols-2">
        <Reveal>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1400&auto=format&fit=crop"
              alt="Chef preparando un plato en la cocina de Luna Bistro"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 480px, 100vw"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-accent">Nuestra historia</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-serif-display text-4xl leading-tight sm:text-5xl">
              Una historia contada a través de cada plato
            </h2>
          </Reveal>

          <div className="mt-10 space-y-8">
            {PILLARS.map((pillar, i) => (
              <Reveal key={pillar.title} delay={0.12 + i * 0.08}>
                <div className="border-l border-border pl-6">
                  <h3 className="font-serif-display text-xl">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{pillar.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
