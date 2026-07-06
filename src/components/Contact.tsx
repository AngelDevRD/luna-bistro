"use client";

import { useState } from "react";
import { MapPin, Clock, Phone, Mail, MessageCircle, CalendarCheck } from "lucide-react";
import { RESTAURANT } from "@/lib/data";
import { Reveal } from "./ui/Reveal";
import { Container } from "./ui/Container";
import { Input, Textarea } from "./ui/Field";
import { Button } from "./ui/Button";

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
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
    <section id="contacto" className="py-28 sm:py-36">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-accent">Contáctanos</p>
            <h2 className="font-serif-display text-4xl leading-tight sm:text-5xl">
              ¿Listo para vivir la experiencia?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Reserva tu mesa hoy mismo o escríbenos con cualquier duda. Nuestro equipo está listo para ayudarte a crear un momento inolvidable.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button href={RESTAURANT.whatsappHref} external className="!bg-[#25D366] !text-white">
              <MessageCircle size={16} /> Escríbenos por WhatsApp
            </Button>
            <Button href={RESTAURANT.phoneHref} variant="secondary">
              <Phone size={16} /> Llamar ahora
            </Button>
            <Button href="#reservas" variant="secondary">
              <CalendarCheck size={16} /> Reservar una cita
            </Button>
            <Button href={`mailto:${RESTAURANT.email}`} variant="secondary">
              <Mail size={16} /> Enviar mensaje
            </Button>
          </div>
        </Reveal>

        <div className="mt-20 grid gap-12 lg:grid-cols-5">
          <Reveal className="lg:col-span-3" delay={0.15}>
            <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
              <Input name="name" placeholder="Nombre" required />
              <Input name="email" type="email" placeholder="Correo electrónico" required />
              <Input name="phone" type="tel" placeholder="Teléfono" className="sm:col-span-2" />
              <Textarea name="message" placeholder="Mensaje" rows={5} required className="sm:col-span-2" />

              <button
                type="submit"
                disabled={status === "loading"}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-opacity duration-300 hover:opacity-85 disabled:opacity-50 sm:col-span-2"
              >
                {status === "loading" ? "Enviando…" : "Enviar mensaje"}
              </button>

              {status === "success" && (
                <p className="text-sm text-accent sm:col-span-2">¡Mensaje enviado! Te responderemos muy pronto.</p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-500 sm:col-span-2">Hubo un problema al enviar tu mensaje. Intenta de nuevo.</p>
              )}
            </form>
          </Reveal>

          <Reveal className="lg:col-span-2" delay={0.2}>
            <div className="flex h-full flex-col gap-6">
              <div className="space-y-5 rounded-2xl border border-border p-6">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-accent" />
                  <p className="text-sm text-foreground/85">
                    {RESTAURANT.address.street}, {RESTAURANT.address.city}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={18} className="mt-0.5 shrink-0 text-accent" />
                  <div className="text-sm text-foreground/85">
                    {RESTAURANT.hours.map((h) => (
                      <p key={h.label}>
                        {h.label}: {h.opens} – {h.closes}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={18} className="mt-0.5 shrink-0 text-accent" />
                  <a href={RESTAURANT.phoneHref} className="text-sm text-foreground/85 hover:text-foreground">
                    {RESTAURANT.phoneRaw}
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={18} className="mt-0.5 shrink-0 text-accent" />
                  <a href={`mailto:${RESTAURANT.email}`} className="text-sm text-foreground/85 hover:text-foreground">
                    {RESTAURANT.email}
                  </a>
                </div>
              </div>

              <div className="relative min-h-[220px] flex-1 overflow-hidden rounded-2xl border border-border">
                <iframe
                  src={RESTAURANT.mapEmbedSrc}
                  loading="lazy"
                  title="Ubicación de Luna Bistro"
                  className="absolute inset-0 h-full w-full grayscale invert-0 dark:invert dark:grayscale"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
