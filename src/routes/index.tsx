import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import shopFront from "@/assets/shop-front.jpg";
import shopInterior from "@/assets/shop-interior.jpg";
import {
  PHONE_DISPLAY,
  PHONE_LINK,
  ADDRESS,
  Stars,
} from "@/components/site-shell";
import { useCountUp, useParallax } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Marquee />
      <Teasers />
      <About />
      <Services />
      <Faq />
      <Cta />
    </>
  );
}

function AnimatedWords({ text, delay = 0 }: { text: string; delay?: number }) {
  const words = text.split(" ");
  return (
    <span className="word-rise">
      {words.map((w, i) => (
        <span key={i} className="mr-[0.25em]">
          <span style={{ animationDelay: `${delay + i * 90}ms` }}>{w}</span>
        </span>
      ))}
    </span>
  );
}

function Hero() {
  const imgWrap = useParallax(0.08);
  return (
    <section className="relative pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-20 h-[480px] w-[480px] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(closest-side, oklch(0.74 0.10 78 / 0.35), transparent)" }}
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-10 relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-6">
            <p className="eyebrow animate-fade-up" style={{ animationDelay: "60ms" }}>
              Rothenburg ob der Tauber · Walk-ins willkommen
            </p>
            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.02] text-balance">
              <AnimatedWords text="Handwerk" delay={120} />
              <br />
              <span className="italic font-normal text-muted-foreground">
                <AnimatedWords text="das man" delay={360} />
              </span>{" "}
              <span className="text-shimmer">
                <AnimatedWords text="spürt." delay={620} />
              </span>
            </h1>
            <p
              className="mt-7 max-w-md text-base md:text-lg text-muted-foreground leading-relaxed animate-fade-up"
              style={{ animationDelay: "900ms" }}
            >
              Saman's Barbershop ist Ihre Adresse für präzise Schnitte, klassische
              Rasuren und gepflegte Bärte — mitten in der Altstadt, in der Galgengasse 41.
              Einfach vorbeikommen, ganz ohne Termin.
            </p>
            <div
              className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up"
              style={{ animationDelay: "1080ms" }}
            >
              <Link
                to="/termin"
                className="btn-shine inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-3.5 text-sm font-medium hover-lift"
              >
                Termin buchen
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                to="/leistungen"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-medium hover:border-foreground/30 hover:bg-cream transition"
              >
                Preise ansehen
              </Link>
            </div>
            <div
              className="mt-12 flex items-center gap-8 animate-fade-up"
              style={{ animationDelay: "1260ms" }}
            >
              <Stars />
              <div>
                <div className="text-sm font-medium">5,0 / 5,0</div>
                <div className="text-xs text-muted-foreground">basierend auf 128 Bewertungen</div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 relative">
            <div
              ref={imgWrap as React.RefObject<HTMLDivElement>}
              className="relative rounded-3xl overflow-hidden shadow-elevated animate-scale-in will-change-transform"
            >
              <img
                src={shopFront}
                alt="Saman vor seinem Barbershop in der Galgengasse 41, Rothenburg ob der Tauber"
                className="w-full h-[420px] sm:h-[520px] lg:h-[640px] object-cover kenburns"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              <div className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full bg-background/85 backdrop-blur px-3.5 py-1.5 text-xs font-medium animate-fade-in" style={{ animationDelay: "800ms" }}>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 gold-pulse" />
                Geöffnet · Walk-ins willkommen
              </div>
            </div>
            <div className="hidden md:flex absolute -bottom-8 -left-8 bg-card border border-border rounded-2xl p-5 shadow-soft items-center gap-4 float-slow">
              <div className="h-10 w-10 rounded-full bg-gold/15 grid place-items-center text-gold gold-pulse">★</div>
              <div>
                <div className="text-sm font-medium">Top-Bewertung</div>
                <div className="text-xs text-muted-foreground">in Rothenburg ob der Tauber</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "Klassische Rasur",
    "Fade Cuts",
    "Bartpflege",
    "Hot Towel",
    "Kinderhaarschnitt",
    "Walk-ins willkommen",
    "Präzise Konturen",
    "Premium Pflege",
  ];
  const row = (
    <div className="flex items-center gap-10 px-5 text-sm text-muted-foreground whitespace-nowrap">
      {items.map((it) => (
        <span key={it} className="flex items-center gap-3">
          <span className="text-gold/70">●</span>
          <span className="uppercase tracking-[0.2em] text-xs">{it}</span>
        </span>
      ))}
    </div>
  );
  return (
    <div className="border-y border-border/70 bg-cream/60 overflow-hidden marquee-mask py-5">
      <div className="marquee-track">
        {row}
        {row}
      </div>
    </div>
  );
}

function Teasers() {
  const tiles = [
    { to: "/leistungen", title: "Leistungen", desc: "Haarschnitt, Bart, Rasur — alle Preise im Überblick.", cta: "Preise ansehen" },
    { to: "/galerie", title: "Galerie", desc: "Eindrücke aus dem Shop in der Altstadt.", cta: "Ansehen" },
    { to: "/stimmen", title: "Stimmen", desc: "Über 128 echte Bewertungen — 5,0 Sterne.", cta: "Lesen" },
    { to: "/termin", title: "Termin", desc: "Online buchen oder einfach vorbeikommen.", cta: "Buchen" },
  ] as const;
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl reveal">
          <p className="eyebrow">Übersicht</p>
          <div className="gold-divider mt-4" />
          <h2 className="mt-6 font-display text-4xl md:text-5xl text-balance">
            Alles auf einen Blick.
          </h2>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {tiles.map((t, i) => (
            <Link
              key={t.to}
              to={t.to}
              className="reveal group relative rounded-3xl border border-border bg-card p-8 hover-lift overflow-hidden"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div
                aria-hidden
                className="absolute -top-20 -right-20 h-44 w-44 rounded-full bg-gold/0 group-hover:bg-gold/15 blur-2xl transition-all duration-700"
              />
              <span className="eyebrow text-gold/80">0{i + 1}</span>
              <h3 className="mt-3 font-display text-2xl">{t.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium">
                {t.cta}
                <span className="text-gold transition-transform duration-500 group-hover:translate-x-2">→</span>
              </span>
              <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="py-24 md:py-32 bg-cream/60 border-y border-border/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-6 reveal img-zoom rounded-3xl overflow-hidden shadow-soft">
          <img
            src={shopInterior}
            alt="Innenraum von Saman's Barbershop mit Friseurstühlen und Spiegeln"
            loading="lazy"
            className="w-full h-[420px] lg:h-[560px] object-cover"
          />
        </div>
        <div className="lg:col-span-6 reveal">
          <p className="eyebrow">Der Shop</p>
          <div className="gold-divider mt-4" />
          <h2 className="mt-6 font-display text-4xl md:text-5xl text-balance">
            Ein ruhiger Ort.{" "}
            <span className="italic font-normal text-muted-foreground">Mitten in der Altstadt.</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Saman's Barbershop liegt in der Galgengasse 41 — wenige Schritte vom
            historischen Stadtzentrum entfernt. Wir nehmen uns Zeit für jeden Schnitt,
            arbeiten mit ausgewählten Werkzeugen und legen Wert auf eine Atmosphäre,
            in der man gerne ankommt.
          </p>
          <dl className="mt-10 grid grid-cols-3 gap-6">
            <Counter target={5} decimals={1} label="Google-Bewertung" suffix="" />
            <Counter target={128} label="Echte Stimmen" suffix="+" />
            <Counter target={100} label="Handarbeit" suffix="%" />
          </dl>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href={`tel:${PHONE_LINK}`} className="btn-shine inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-3.5 text-sm font-medium hover-lift">
              {PHONE_DISPLAY}
            </a>
            <Link to="/termin" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-medium hover:border-foreground/30 transition">
              Termin buchen
            </Link>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">{ADDRESS}</p>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const items = [
    { icon: "✂", title: "Haarschnitt", desc: "Klassisch oder modern — präzise auf Ihre Kopfform abgestimmt.", price: "ab 18 €" },
    { icon: "🪒", title: "Bartpflege", desc: "Konturieren, Trimmen und Formen für einen gepflegten Bart.", price: "ab 12 €" },
    { icon: "🛁", title: "Hot-Towel-Rasur", desc: "Die klassische Nassrasur mit warmem Tuch und hochwertigen Produkten.", price: "ab 20 €" },
    { icon: "👦", title: "Kinderhaarschnitt", desc: "Für unsere kleinen Gäste — geduldig und kinderfreundlich.", price: "ab 12 €" },
  ];
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 reveal">
          <div>
            <p className="eyebrow">Leistungen</p>
            <div className="gold-divider mt-4" />
            <h2 className="mt-6 font-display text-4xl md:text-5xl text-balance">
              Was wir für Sie tun.
            </h2>
          </div>
          <Link
            to="/leistungen"
            className="inline-flex items-center gap-2 text-sm font-medium text-gold hover:text-gold/70 transition shrink-0"
          >
            Alle Preise ansehen →
          </Link>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div
              key={item.title}
              className="reveal rounded-3xl bg-card border border-border p-8"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="font-display text-xl">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              <p className="mt-4 text-sm font-semibold text-gold">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    q: "Brauche ich einen Termin?",
    a: "Nein — Walk-ins sind jederzeit willkommen. Für einen festen Wunschtermin können Sie uns gerne anrufen oder das Online-Formular nutzen.",
  },
  {
    q: "Wie lange dauert ein Haarschnitt?",
    a: "Ein normaler Haarschnitt dauert in der Regel 20–35 Minuten. Mit Bart oder Rasur rechnen Sie bitte etwas mehr Zeit ein.",
  },
  {
    q: "Welche Zahlungsmethoden werden akzeptiert?",
    a: "Wir akzeptieren Barzahlung sowie gängige EC- und Kreditkarten.",
  },
  {
    q: "Macht ihr auch Kinderhaarschnitte?",
    a: "Ja, gerne! Wir schneiden Haare für Kinder ab ca. 4 Jahren. Bitte bringen Sie ruhig ein Spielzeug oder Gerät mit, damit sich Ihr Kind wohlfühlt.",
  },
  {
    q: "Wo parke ich am besten?",
    a: "Das nächste Parkhaus befindet sich am Stadtpark (ca. 5 Minuten zu Fuß). Alternativ gibt es Parkplätze am Stadtgraben.",
  },
];

function Faq() {
  return (
    <section className="py-24 md:py-32 bg-cream/60 border-y border-border/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4 reveal">
          <p className="eyebrow">FAQ</p>
          <div className="gold-divider mt-4" />
          <h2 className="mt-6 font-display text-4xl text-balance">
            Häufige Fragen.
          </h2>
          <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
            Haben Sie eine weitere Frage? Rufen Sie uns einfach an.
          </p>
          <a
            href={`tel:${PHONE_LINK}`}
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold"
          >
            {PHONE_DISPLAY} →
          </a>
        </div>
        <div className="lg:col-span-8 divide-y divide-border reveal" style={{ transitionDelay: "120ms" }}>
          {faqs.map((faq, i) => (
            <FaqItem key={i} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="py-5">
      <button
        className="flex w-full items-center justify-between gap-4 text-left"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="font-medium">{question}</span>
        <span className={`text-gold transition-transform duration-300 shrink-0 ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      {open && (
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-xl">
          {answer}
        </p>
      )}
    </div>
  );
}

function Cta() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="reveal rounded-3xl bg-foreground text-background px-8 py-16 md:px-16 md:py-24 text-center relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{ background: "radial-gradient(ellipse at 50% 0%, oklch(0.74 0.10 78 / 0.6), transparent 70%)" }}
          />
          <p className="eyebrow text-background/60">Ihr nächster Besuch</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-background text-balance max-w-2xl mx-auto">
            Bereit für den perfekten Schnitt?
          </h2>
          <p className="mt-4 text-background/70 max-w-md mx-auto text-sm leading-relaxed">
            Kommen Sie einfach vorbei oder buchen Sie Ihren Termin online. Wir freuen uns auf Sie.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/termin"
              className="btn-shine inline-flex items-center gap-2 rounded-full bg-background text-foreground px-8 py-4 text-sm font-medium hover-lift"
            >
              Termin buchen →
            </Link>
            <a
              href={`tel:${PHONE_LINK}`}
              className="inline-flex items-center gap-2 rounded-full border border-background/20 text-background px-8 py-4 text-sm font-medium hover:border-background/50 transition"
            >
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Counter({
  target,
  label,
  decimals = 0,
  suffix = "",
}: {
  target: number;
  label: string;
  decimals?: number;
  suffix?: string;
}) {
  const { ref, value } = useCountUp(target, 1600);
  const display = decimals > 0 ? value.toFixed(decimals).replace(".", ",") : Math.round(value).toString();
  return (
    <div className="border-l border-border pl-4">
      <dt className="font-display text-3xl tabular-nums">
        <span ref={ref}>{display}</span>
        {suffix}
      </dt>
      <dd className="text-xs text-muted-foreground mt-1">{label}</dd>
    </div>
  );
}

import React from "react";
