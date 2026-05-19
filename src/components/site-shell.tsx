import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useScrollProgress } from "@/hooks/use-reveal";
import logo from "@/assets/logo.png";
import React from "react";

export const PHONE_DISPLAY = "01522 8330131";
export const PHONE_LINK = "+4915228330131";
export const ADDRESS = "Galgengasse 41, 91541 Rothenburg ob der Tauber";
export const INSTAGRAM_URL = "https://www.instagram.com/";
export const FACEBOOK_URL = "https://www.facebook.com/";
export const MAPS_LINK =
  "https://www.google.com/maps/search/?api=1&query=Samans+Barbershop+Galgengasse+41+Rothenburg";
export const WHATSAPP_LINK = "https://wa.me/4915228330131";

const links = [
  { to: "/", label: "Start" },
  { to: "/leistungen", label: "Preise" },
  { to: "/galerie", label: "Galerie" },
  { to: "/stimmen", label: "Stimmen" },
  { to: "/termin", label: "Termin" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();
  const progress = useScrollProgress();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-background/80 border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 md:h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center group" aria-label="Saman's Barbershop — Startseite">
          <img
            src={logo}
            alt="Saman's Barbershop"
            className="h-9 md:h-11 w-auto transition-transform duration-500 group-hover:scale-[1.04]"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="link-underline text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "link-underline is-active text-sm text-foreground" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={`tel:${PHONE_LINK}`}
            className="btn-shine hidden sm:inline-flex items-center gap-2 rounded-full bg-foreground text-background px-4 md:px-5 py-2 md:py-2.5 text-xs md:text-sm font-medium hover:bg-foreground/85 transition"
          >
            <span className="hidden md:inline">Anrufen</span>
            <span>{PHONE_DISPLAY}</span>
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menü"
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border border-border bg-card"
          >
            <span className="block w-4 h-px bg-foreground relative before:content-[''] before:absolute before:-top-1.5 before:left-0 before:w-4 before:h-px before:bg-foreground after:content-[''] after:absolute after:top-1.5 after:left-0 after:w-4 after:h-px after:bg-foreground" />
          </button>
        </div>
      </div>
      <div
        className="scroll-progress h-[2px] bg-gold"
        style={{ ["--p" as never]: progress }}
      />
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl animate-fade-in">
          <nav className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="py-3 text-base text-muted-foreground hover:text-foreground"
                activeProps={{ className: "py-3 text-base text-foreground" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={`tel:${PHONE_LINK}`}
              className="btn-shine mt-2 inline-flex items-center justify-center rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium"
            >
              {PHONE_DISPLAY}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <img src={logo} alt="Saman's Barbershop" className="h-10 w-auto" />
          <p className="mt-4 text-sm text-muted-foreground max-w-xs leading-relaxed">
            Premium Friseur und Barber in der Altstadt von Rothenburg ob der Tauber.
          </p>
        </div>
        <div className="text-sm">
          <p className="eyebrow mb-4">Kontakt</p>
          <p className="text-foreground/80">{ADDRESS}</p>
          <p className="mt-2">
            <a href={`tel:${PHONE_LINK}`} className="hover:text-foreground">
              {PHONE_DISPLAY}
            </a>
          </p>
          <p className="mt-2">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener" className="text-[#25D366] hover:opacity-80 transition">
              WhatsApp schreiben
            </a>
          </p>
        </div>
        <div className="text-sm">
          <p className="eyebrow mb-4">Navigation</p>
          <ul className="space-y-2 text-foreground/80">
            {links.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Saman's Barbershop · Rothenburg ob der Tauber</p>
          <p>Mit Sorgfalt gestaltet.</p>
        </div>
      </div>
    </footer>
  );
}

export function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener"
      aria-label="WhatsApp schreiben"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center h-14 w-14 rounded-full shadow-elevated transition-transform hover:scale-110"
      style={{ backgroundColor: "#25D366" }}
    >
      <svg viewBox="0 0 24 24" fill="white" width="26" height="26" aria-hidden>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  );
}

export function Stars() {
  return (
    <div className="flex items-center gap-1 text-gold">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.787 1.401 8.168L12 19.771l-7.335 3.395 1.401-8.168L.132 9.211l8.2-1.193z" />
        </svg>
      ))}
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
}) {
  return (
    <section className="pt-32 md:pt-40 pb-12 md:pb-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="eyebrow reveal">{eyebrow}</p>
        <div className="gold-divider mt-4 reveal" style={{ transitionDelay: "80ms" }} />
        <h1
          className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl leading-[1.02] text-balance max-w-4xl reveal"
          style={{ transitionDelay: "140ms" }}
        >
          {title}
        </h1>
        {intro && (
          <p
            className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed reveal"
            style={{ transitionDelay: "220ms" }}
          >
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
