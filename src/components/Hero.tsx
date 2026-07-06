"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { RESTAURANT } from "@/lib/data";
import { Button } from "./ui/Button";

export function Hero() {
  return (
    <section id="top" className="relative flex h-screen min-h-[640px] w-full items-end overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2400&auto=format&fit=crop"
        alt="Interior elegante de Luna Bistro al atardecer"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/40" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-24 text-white sm:px-8 sm:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-white/70"
        >
          Cocina de autor · Ciudad de México
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif-display text-6xl leading-[1.05] sm:text-7xl lg:text-8xl"
        >
          {RESTAURANT.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-md text-lg text-white/85"
        >
          {RESTAURANT.slogan}. Una experiencia gastronómica donde cada plato se sirve con precisión y alma.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Button href="#reservas" variant="primary">
            Reservar mesa
          </Button>
          <Button href="#menu" variant="secondary" className="!text-white !border-white/40 hover:!border-white">
            Ver menú
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 right-6 z-10 hidden text-xs uppercase tracking-[0.25em] text-white/60 sm:right-8 sm:block"
      >
        Desliza para descubrir
      </motion.div>
    </section>
  );
}
