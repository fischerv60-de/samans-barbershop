import { createFileRoute, Link } from "@tanstack/react-router";
import { Stars, MAPS_LINK } from "@/components/site-shell";

export const Route = createFileRoute("/stimmen")({
  head: () => ({
    meta: [
      { title: "Stimmen — Saman's Barbershop Rothenburg" },
      { name: "description", content: "Über 128 echte Google-Bewertungen mit 5,0 Sternen. Was Kunden über Saman's Barbershop in Rothenburg sagen." },
      { property: "og:title", content: "Stimmen — Saman's Barbershop" },
      { property: "og:description", content: "5,0 Sterne, 128+ Bewertungen — die Stimmen unserer Kunden." },
    ],
  }),
  component: StimmenPage,
});

const reviews = [
  { quote: "Bester Barber in Rothenburg. Saman nimmt sich Zeit, das Ergebnis sitzt jedes Mal perfekt.", name: "Lukas M." },
  { quote: "Top Schnitt, ruhige Atmosphäre und ein freundliches Team. Klare Empfehlung.", name: "Daniel B." },
  { quote: "Sehr sauber, modern und professionell. Mein Bart war noch nie so gepflegt.", name: "Marco S." },
  { quote: "Ab jetzt nur noch hier! Super sauber und genau gearbeitet, genau wie ich es wollte.", name: "Cavallo" },
  { quote: "Walk-In ohne Termin — trotzdem freundlich empfangen und top Schnitt bekommen.", name: "Tobias R." },
  { quote: "Premium-Erlebnis mitten in der Altstadt. Unbedingt empfehlenswert.", name: "Jonas K." },
];

function StimmenPage() {
  return (
    <section className="bg-foreground text-background">
      <div className="pt-32 md:pt-40 pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl">
            <p className="eyebrow text-background/60">Stimmen</p>
            <div className="gold-divider mt-4" />
            <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl text-balance">
              5,0 Sterne. <span className="italic font-normal text-background/60">128+ Stimmen.</span>
            </h1>
            <p className="mt-6 text-background/70 leading-relaxed">
              Über 128 Google-Bewertungen, ein Schnitt von 5,0 — und vor allem viele
              Stammkunden, die immer wiederkommen.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-full bg-background text-foreground px-7 py-3.5 text-sm font-medium hover-lift"
              >
                Auf Google ansehen
              </a>
              <Link
                to="/termin"
                className="inline-flex items-center gap-2 rounded-full border border-background/20 px-7 py-3.5 text-sm font-medium hover:border-background/50 transition"
              >
                Termin vereinbaren
              </Link>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {reviews.map((r, i) => (
              <figure
                key={i}
                className="reveal rounded-3xl bg-background/5 border border-background/10 p-8 md:p-10 backdrop-blur"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <Stars />
                <blockquote className="mt-6 font-display text-xl leading-snug text-background">
                  „{r.quote}"
                </blockquote>
                <figcaption className="mt-8 text-sm text-background/60">— {r.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
