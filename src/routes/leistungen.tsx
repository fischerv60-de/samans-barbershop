import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, PHONE_LINK, PHONE_DISPLAY, MAPS_LINK } from "@/components/site-shell";

export const Route = createFileRoute("/leistungen")({
  component: LeistungenPage,
});

const categories = [
  {
    title: "Haarschnitt",
    items: [
      { name: "Haarschnitt (Schere)", desc: "Klassisch mit Schere, inkl. Waschen & Styling", price: "25 €" },
      { name: "Haarschnitt (Maschine)", desc: "Präziser Maschinenschnitt mit Konturpflege", price: "18 €" },
      { name: "Haarschnitt + Bart", desc: "Kombi aus Haarschnitt und Bartpflege", price: "35 €" },
      { name: "Kinderhaarschnitt", desc: "Für Kinder bis 12 Jahre", price: "12 €" },
      { name: "Studentenrabatt", desc: "Gültig mit Studentenausweis", price: "–2 €" },
    ],
  },
  {
    title: "Bart & Rasur",
    items: [
      { name: "Bartpflege", desc: "Konturieren, Trimmen und Formen", price: "12 €" },
      { name: "Vollrasur (Nassrasur)", desc: "Klassische Nassrasur mit Rasiermesser", price: "20 €" },
      { name: "Hot-Towel-Rasur", desc: "Luxuriöse Rasur mit warmem Tuch und Ölen", price: "25 €" },
      { name: "Bart formen + stylen", desc: "Für den perfekten Auftritt", price: "15 €" },
    ],
  },
  {
    title: "Kombi-Pakete",
    items: [
      { name: "Gentleman-Paket", desc: "Haarschnitt + Hot-Towel-Rasur + Pflege", price: "45 €" },
      { name: "Komplett-Paket", desc: "Waschen + Haarschnitt + Bart + Styling", price: "40 €" },
      { name: "Hochzeits-Paket", desc: "Exklusives Styling für Ihren besonderen Tag", price: "auf Anfrage" },
    ],
  },
];

function LeistungenPage() {
  return (
    <>
      <PageHeader
        eyebrow="Leistungen & Preise"
        title={
          <>
            Was wir für Sie{" "}
            <span className="italic font-normal text-muted-foreground">tun.</span>
          </>
        }
        intro="Alle Leistungen auf einen Blick — transparent, fair und ohne versteckte Kosten. Walk-ins sind jederzeit willkommen."
      />

      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-3 gap-6">
            {categories.map((cat, ci) => (
              <div
                key={cat.title}
                className="reveal rounded-3xl bg-card border border-border overflow-hidden"
                style={{ transitionDelay: `${ci * 100}ms` }}
              >
                <div className="bg-foreground text-background px-8 py-5">
                  <h2 className="font-display text-xl">{cat.title}</h2>
                </div>
                <div className="divide-y divide-border">
                  {cat.items.map((item) => (
                    <div key={item.name} className="px-8 py-5 flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-medium">{item.name}</p>
                        <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{item.desc}</p>
                      </div>
                      <span className="text-sm font-semibold text-gold shrink-0 mt-0.5">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs text-muted-foreground text-center">
            Alle Preise inkl. MwSt. · Preisänderungen vorbehalten · Stand: 2025
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-cream/60 border-y border-border/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <p className="eyebrow">Besondere Anlässe</p>
            <div className="gold-divider mt-4" />
            <h2 className="mt-6 font-display text-4xl text-balance">
              Hochzeit, Event oder{" "}
              <span className="italic font-normal text-muted-foreground">besonderer Anlass?</span>
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed text-sm">
              Für Hochzeiten, Veranstaltungen oder Gruppenanfragen erstellen wir
              Ihnen gerne ein individuelles Angebot. Sprechen Sie uns einfach an.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`tel:${PHONE_LINK}`}
                className="btn-shine inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-3.5 text-sm font-medium hover-lift"
              >
                Jetzt anfragen
              </a>
              <Link
                to="/termin"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-medium hover:border-foreground/30 transition"
              >
                Online buchen
              </Link>
            </div>
          </div>

          <div className="reveal grid grid-cols-2 gap-4" style={{ transitionDelay: "120ms" }}>
            {[
              { icon: "✂", label: "Präzise Schnitte", sub: "Jedes Detail zählt" },
              { icon: "🪒", label: "Klassische Rasur", sub: "Old-School-Handwerk" },
              { icon: "💈", label: "Premium Produkte", sub: "Ausgewählte Marken" },
              { icon: "⭐", label: "5,0 Sterne", sub: "128+ Bewertungen" },
            ].map((f) => (
              <div key={f.label} className="rounded-2xl bg-card border border-border p-6 text-center">
                <div className="text-2xl mb-2">{f.icon}</div>
                <p className="text-sm font-medium">{f.label}</p>
                <p className="text-xs text-muted-foreground mt-1">{f.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 text-center reveal">
          <p className="eyebrow">Anfahrt</p>
          <div className="gold-divider mt-4 mx-auto" />
          <h2 className="mt-6 font-display text-3xl">Sie finden uns hier.</h2>
          <p className="mt-3 text-muted-foreground text-sm">Galgengasse 41 · 91541 Rothenburg ob der Tauber</p>
          <div className="mt-10 rounded-3xl overflow-hidden border border-border shadow-soft h-72">
            <iframe
              title="Standort Saman's Barbershop"
              src="https://www.google.com/maps?q=Galgengasse%2041%2C%2091541%20Rothenburg%20ob%20der%20Tauber&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
            />
          </div>
          <a
            href={MAPS_LINK}
            target="_blank"
            rel="noopener"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold"
          >
            Route in Google Maps öffnen →
          </a>
        </div>
      </section>
    </>
  );
}
