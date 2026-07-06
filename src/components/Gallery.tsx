"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GALLERY_IMAGES } from "@/lib/data";
import { Reveal } from "./ui/Reveal";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = () => setActiveIndex(null);
  const next = () => setActiveIndex((i) => (i === null ? null : (i + 1) % GALLERY_IMAGES.length));
  const prev = () =>
    setActiveIndex((i) => (i === null ? null : (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length));

  return (
    <section id="galeria" className="py-28 sm:py-36">
      <Container>
        <SectionHeading eyebrow="Galería" title="Un vistazo a la experiencia" description="Ambiente, platillos y detalles que hacen de cada visita algo memorable." />

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {GALLERY_IMAGES.map((src, i) => (
            <Reveal key={src} delay={(i % 4) * 0.06}>
              <button
                onClick={() => setActiveIndex(i)}
                className={clsxSize(i)}
                aria-label="Ampliar imagen"
              >
                <Image
                  src={src}
                  alt={`Galería Luna Bistro ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 ease-out hover:scale-110"
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                />
              </button>
            </Reveal>
          ))}
        </div>
      </Container>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-10"
            onClick={close}
          >
            <button
              onClick={close}
              className="absolute right-5 top-5 text-white/80 transition-colors hover:text-white"
              aria-label="Cerrar"
            >
              <X size={28} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-4 text-white/80 transition-colors hover:text-white sm:left-8"
              aria-label="Anterior"
            >
              <ChevronLeft size={32} />
            </button>

            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative aspect-[4/3] w-full max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={GALLERY_IMAGES[activeIndex]}
                alt={`Galería Luna Bistro ${activeIndex + 1}`}
                fill
                className="rounded-lg object-contain"
                sizes="768px"
              />
            </motion.div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-4 text-white/80 transition-colors hover:text-white sm:right-8"
              aria-label="Siguiente"
            >
              <ChevronRight size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function clsxSize(i: number) {
  const base = "relative block aspect-square w-full overflow-hidden rounded-xl";
  return i === 0 ? `${base} sm:col-span-2 sm:aspect-[2/1]` : base;
}
