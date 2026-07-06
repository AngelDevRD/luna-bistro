"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { clsx } from "clsx";
import { Moon, Sun, Menu, X } from "lucide-react";
import { NAV_LINKS, RESTAURANT } from "@/lib/data";
import { useTheme } from "@/lib/theme";
import { Button } from "./ui/Button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <Link href="#top" className="font-serif-display text-xl tracking-wide">
          {RESTAURANT.name}
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-foreground/75 transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <button
            onClick={toggle}
            aria-label="Cambiar tema"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors hover:border-foreground/40"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <Button href="#reservas" className="!py-2.5 !px-5 text-xs">
            Reservar mesa
          </Button>
        </div>

        <button
          className="flex h-9 w-9 items-center justify-center lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-6 py-6 lg:hidden">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-base">
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-6 flex items-center justify-between">
            <button
              onClick={toggle}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border"
              aria-label="Cambiar tema"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <Button href="#reservas" onClick={() => setOpen(false)} className="!py-2.5 !px-5 text-xs">
              Reservar mesa
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
