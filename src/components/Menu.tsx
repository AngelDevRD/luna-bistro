"use client";

import { useState } from "react";
import { clsx } from "clsx";
import { MENU } from "@/lib/data";
import { Reveal } from "./ui/Reveal";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";

const TABS = [
  { key: "entradas", label: "Entradas" },
  { key: "fuertes", label: "Platos fuertes" },
  { key: "postres", label: "Postres" },
  { key: "bebidas", label: "Bebidas" },
] as const;

type TabKey = (typeof TABS)[number]["key"];

export function Menu() {
  const [active, setActive] = useState<TabKey>("entradas");

  return (
    <section id="menu" className="bg-surface py-28 sm:py-36">
      <Container>
        <SectionHeading eyebrow="Carta" title="Nuestro menú" description="Una propuesta que cambia con las estaciones, siempre fiel a la calidad y el origen del producto." />

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-wrap justify-center gap-2">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActive(tab.key)}
                className={clsx(
                  "rounded-full px-5 py-2.5 text-sm transition-colors duration-300",
                  active === tab.key
                    ? "bg-foreground text-background"
                    : "border border-border text-foreground/70 hover:border-foreground/40"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mx-auto mt-14 max-w-3xl divide-y divide-border">
          {MENU[active].map((item, i) => (
            <Reveal key={item.name} delay={i * 0.05}>
              <div className="flex items-start justify-between gap-6 py-6">
                <div>
                  <h3 className="font-serif-display text-lg">{item.name}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.description}</p>
                </div>
                <span className="whitespace-nowrap pt-1 text-sm text-accent">{item.price}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
