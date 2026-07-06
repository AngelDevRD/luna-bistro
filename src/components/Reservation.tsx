"use client";

import { useState } from "react";
import { Reveal } from "./ui/Reveal";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { Input, Select } from "./ui/Field";

type Status = "idle" | "loading" | "success" | "error";

export function Reservation() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    setStatus("loading");

    try {
      const res = await fetch("/api/reservation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(form)),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="reservas" className="py-28 sm:py-36">
      <Container className="max-w-2xl">
        <SectionHeading eyebrow="Reservaciones" title="Reserva tu mesa" description="Completa el formulario y nuestro equipo confirmará tu reserva a la brevedad." />

        <Reveal delay={0.12}>
          <form onSubmit={handleSubmit} className="mt-12 grid gap-5 sm:grid-cols-2">
            <Input name="name" placeholder="Nombre completo" required className="sm:col-span-2" />
            <Input name="phone" type="tel" placeholder="Teléfono" required />
            <Input name="guests" type="number" min={1} max={20} placeholder="Número de personas" required />
            <Input name="date" type="date" required />
            <Input name="time" type="time" required />
            <Select name="occasion" defaultValue="" className="sm:col-span-2">
              <option value="" disabled>
                Ocasión (opcional)
              </option>
              <option value="cumpleanos">Cumpleaños</option>
              <option value="aniversario">Aniversario</option>
              <option value="negocios">Reunión de negocios</option>
              <option value="otro">Otro</option>
            </Select>

            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-opacity duration-300 hover:opacity-85 disabled:opacity-50 sm:col-span-2"
            >
              {status === "loading" ? "Enviando…" : "Confirmar reserva"}
            </button>

            {status === "success" && (
              <p className="text-sm text-accent sm:col-span-2">¡Gracias! Tu solicitud fue recibida, te contactaremos pronto.</p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-500 sm:col-span-2">Hubo un problema al enviar tu reserva. Intenta de nuevo.</p>
            )}
          </form>
        </Reveal>
      </Container>
    </section>
  );
}
