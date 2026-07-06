"use client";

import { useState } from "react";
import { clsx } from "clsx";
import { ChevronDown } from "lucide-react";
import { FAQS } from "@/lib/data";
import { Reveal } from "./ui/Reveal";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-surface py-28 sm:py-36">
      <Container className="max-w-3xl">
        <SectionHeading eyebrow="Preguntas frecuentes" title="¿Tienes dudas?" />

        <div className="mt-14 divide-y divide-border border-y border-border">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={item.question} delay={i * 0.05}>
                <div>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-6 text-left"
                  >
                    <span className="font-serif-display text-lg">{item.question}</span>
                    <ChevronDown
                      size={20}
                      className={clsx("shrink-0 text-muted transition-transform duration-300", isOpen && "rotate-180")}
                    />
                  </button>
                  <div
                    className={clsx(
                      "grid overflow-hidden transition-all duration-300 ease-out",
                      isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <p className="min-h-0 text-sm leading-relaxed text-muted">{item.answer}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
