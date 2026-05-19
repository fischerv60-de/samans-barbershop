import { createFileRoute } from "@tanstack/react-router";
import shopFront from "@/assets/shop-front.jpg";
import shopInterior from "@/assets/shop-interior.jpg";
import cut1 from "@/assets/cut-1.jpg";
import cut2 from "@/assets/cut-2.jpg";
import shopLocation from "@/assets/shop-location.jpg";
import { PageHeader } from "@/components/site-shell";

export const Route = createFileRoute("/galerie")({
  head: () => ({
    meta: [
      { title: "Galerie — Saman's Barbershop Rothenburg" },
      { name: "description", content: "Eindrücke aus Saman's Barbershop in der Galgengasse 41, Rothenburg ob der Tauber — Schaufenster, Innenraum und ausgewählte Looks." },
      { property: "og:title", content: "Galerie — Saman's Barbershop" },
      { property: "og:description", content: "Echte Bilder aus dem Shop in der Altstadt von Rothenburg." },
    ],
  }),
  component: GaleriePage,
});

const items = [
  { src: shopFront, alt: "Saman vor seinem Barbershop in der Galgengasse 41, Rothenburg" },
  { src: shopInterior, alt: "Innenraum von Saman's Barbershop mit Friseurstühlen und Spiegeln" },
  { src: cut1, alt: "Sauberer Low Fade mit texturiertem Deckhaar — Look aus dem Shop" },
  { src: cut2, alt: "Klassischer Schnitt mit weichem Verlauf von hinten" },
  { src: shopLocation, alt: "Standort des Barbershops in der historischen Altstadt von Rothenburg" },
];

function GaleriePage() {
  return (
    <>
      <PageHeader
        eyebrow="Galerie"
        title={<>Eindrücke <span className="italic font-normal text-muted-foreground">aus dem Shop.</span></>}
        intro="Echte Bilder aus dem Saman's Barbershop in Rothenburg ob der Tauber — Schaufenster, Innenraum und Lieblings-Looks."
      />
      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            {items.map((it, i) => (
              <figure
                key={i}
                className={`reveal img-zoom rounded-3xl overflow-hidden bg-muted ${
                  i === 0 ? "md:col-span-2" : ""
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <img
                  src={it.src}
                  alt={it.alt}
                  loading={i === 0 ? "eager" : "lazy"}
                  className={`w-full object-cover ${i === 0 ? "h-[420px] md:h-[640px]" : "h-[420px] md:h-[520px]"}`}
                />
              </figure>
            ))}
          </div>
          <p className="mt-10 text-xs text-muted-foreground max-w-xl">
            Weitere Bilder finden Sie auf dem Google-Profil von Saman's Barbershop.
          </p>
        </div>
      </section>
    </>
  );
}
