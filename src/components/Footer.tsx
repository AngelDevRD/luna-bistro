"use client";

import { RESTAURANT, NAV_LINKS } from "@/lib/data";
import { Container } from "./ui/Container";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-[18px] w-[18px]">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
      <path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.7c0-.9.3-1.5 1.6-1.5h1.7V3.3C16.5 3.2 15.4 3 14.2 3c-2.6 0-4.4 1.6-4.4 4.5v2.3H7v3.2h2.8v8h3.7Z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
      <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
      <path d="M6.94 8.5H4V20h2.94V8.5ZM5.47 4a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4ZM20 20h-2.94v-5.86c0-1.4-.03-3.2-1.95-3.2-1.95 0-2.25 1.52-2.25 3.1V20H9.92V8.5h2.82v1.57h.04c.39-.74 1.35-1.52 2.78-1.52 2.97 0 3.44 1.95 3.44 4.5V20Z" />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  const handleNewsletter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.currentTarget.reset();
  };

  return (
    <footer className="border-t border-border bg-surface">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-serif-display text-2xl">{RESTAURANT.name}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
            {RESTAURANT.slogan}. Una experiencia gastronómica de autor en el corazón de la ciudad.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={RESTAURANT.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors hover:border-foreground/40"
            >
              <InstagramIcon />
            </a>
            <a
              href={RESTAURANT.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors hover:border-foreground/40"
            >
              <FacebookIcon />
            </a>
            <a
              href={RESTAURANT.socials.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors hover:border-foreground/40"
            >
              <TikTokIcon />
            </a>
            <a
              href={RESTAURANT.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors hover:border-foreground/40"
            >
              <LinkedinIcon />
            </a>
          </div>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">Navegación</p>
          <ul className="mt-4 space-y-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-foreground/75 hover:text-foreground">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">Legal</p>
          <ul className="mt-4 space-y-2.5">
            <li>
              <a href="#" className="text-sm text-foreground/75 hover:text-foreground">
                Aviso de privacidad
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-foreground/75 hover:text-foreground">
                Términos y condiciones
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-foreground/75 hover:text-foreground">
                Política de cookies
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">Newsletter</p>
          <p className="mt-4 text-sm text-foreground/75">Recibe novedades sobre eventos y menús de temporada.</p>
          <form onSubmit={handleNewsletter} className="mt-4 flex gap-2">
            <input
              type="email"
              required
              placeholder="tu@email.com"
              className="w-full rounded-full border border-border bg-background px-4 py-2.5 text-sm placeholder:text-muted focus:border-accent focus:outline-none"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-foreground px-4 py-2.5 text-xs font-medium text-background transition-opacity hover:opacity-85"
            >
              Unirme
            </button>
          </form>
        </div>
      </Container>

      <div className="border-t border-border py-6">
        <Container className="flex flex-col items-center justify-between gap-2 text-xs text-muted sm:flex-row">
          <p>© {year} {RESTAURANT.name}. Todos los derechos reservados.</p>
          <p>Diseñado con dedicación para una experiencia excepcional.</p>
        </Container>
      </div>
    </footer>
  );
}
