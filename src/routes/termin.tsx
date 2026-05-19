import React, { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  PHONE_DISPLAY,
  PHONE_LINK,
  ADDRESS,
  INSTAGRAM_URL,
  FACEBOOK_URL,
  MAPS_LINK,
  WHATSAPP_LINK,
  PageHeader,
} from "@/components/site-shell";

export const Route = createFileRoute("/termin")({
  component: TerminPage,
});

const hours = [
  { d: "Montag", h: "Geschlossen" },
  { d: "Dienstag", h: "09:00 – 18:30" },
  { d: "Mittwoch", h: "09:00 – 18:30" },
  { d: "Donnerstag", h: "09:00 – 18:30" },
  { d: "Freitag", h: "09:00 – 19:00" },
  { d: "Samstag", h: "09:00 – 16:00" },
  { d: "Sonntag", h: "Geschlossen" },
];

const services = [
  "Haarschnitt (Schere)",
  "Haarschnitt (Maschine)",
  "Haarschnitt + Bart",
  "Kinderhaarschnitt",
  "Bartpflege",
  "Nassrasur",
  "Hot-Towel-Rasur",
  "Gentleman-Paket",
  "Komplett-Paket",
  "Sonstiges / Anfrage",
];

type FormState = {
  name: string;
  phone: string;
  service: string;
  day: string;
  time: string;
  notes: string;
};

function TerminPage() {
  return (
    <>
      <PageHeader
        eyebrow="Termin & Kontakt"
        title={
          <>
            Kommen Sie{" "}
            <span className="italic font-normal text-muted-foreground">vorbei.</span>
          </>
        }
        intro="Buchen Sie Ihren Wunschtermin direkt online oder rufen Sie uns an. Walk-ins sind je nach Auslastung jederzeit willkommen."
      />
      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5 space-y-10 reveal">
            <ContactInfo />
            <QuickActions />
          </div>
          <div className="lg:col-span-7 reveal" style={{ transitionDelay: "100ms" }}>
            <BookingForm />
          </div>
        </div>

        <div className="mt-16 mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-8 reveal">
          <MapBlock />
          <HoursBlock />
        </div>
      </section>
    </>
  );
}

function ContactInfo() {
  return (
    <div className="space-y-6">
      <InfoRow label="Adresse">
        <a href={MAPS_LINK} target="_blank" rel="noopener" className="hover:text-foreground transition">
          {ADDRESS}
        </a>
      </InfoRow>
      <InfoRow label="Telefon">
        <a href={`tel:${PHONE_LINK}`} className="hover:text-foreground transition">
          {PHONE_DISPLAY}
        </a>
      </InfoRow>
      <InfoRow label="Folgen">
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <a className="hover:text-foreground transition" href={INSTAGRAM_URL} target="_blank" rel="noopener">Instagram</a>
          <a className="hover:text-foreground transition" href={FACEBOOK_URL} target="_blank" rel="noopener">Facebook</a>
          <a className="hover:text-foreground transition" href={MAPS_LINK} target="_blank" rel="noopener">Google Business</a>
        </div>
      </InfoRow>
    </div>
  );
}

function QuickActions() {
  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={`tel:${PHONE_LINK}`}
        className="btn-shine inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover-lift"
      >
        📞 Anrufen
      </a>
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener"
        className="inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-6 py-3 text-sm font-medium hover-lift"
      >
        💬 WhatsApp
      </a>
      <a
        href={MAPS_LINK}
        target="_blank"
        rel="noopener"
        className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium hover:border-foreground/30 transition"
      >
        📍 Route planen
      </a>
    </div>
  );
}

function BookingForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    service: "",
    day: "",
    time: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  const whatsappText = encodeURIComponent(
    `Hallo! Ich möchte gerne einen Termin vereinbaren.\n\nName: ${form.name}\nTelefon: ${form.phone}\nLeistung: ${form.service}\nWunschtag: ${form.day}${form.time ? ` um ${form.time} Uhr` : ""}\n${form.notes ? `Hinweis: ${form.notes}` : ""}`
  );

  if (submitted) {
    return (
      <div className="rounded-3xl bg-card border border-border p-10 md:p-14 text-center">
        <div className="text-4xl mb-4">✅</div>
        <h3 className="font-display text-2xl">Anfrage gesendet!</h3>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-sm mx-auto">
          Wir melden uns so schnell wie möglich bei Ihnen. Alternativ können Sie
          uns auch direkt anrufen oder per WhatsApp schreiben.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={`tel:${PHONE_LINK}`}
            className="btn-shine inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium"
          >
            {PHONE_DISPLAY}
          </a>
          <a
            href={`https://wa.me/4915228330131?text=${whatsappText}`}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-6 py-3 text-sm font-medium"
          >
            Per WhatsApp bestätigen
          </a>
        </div>
        <button
          onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", service: "", day: "", time: "", notes: "" }); }}
          className="mt-6 text-xs text-muted-foreground hover:text-foreground transition"
        >
          Neue Anfrage stellen
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-card border border-border overflow-hidden">
      <div className="bg-foreground text-background px-8 py-6">
        <h2 className="font-display text-xl">Online-Terminanfrage</h2>
        <p className="text-background/70 text-sm mt-1">Wir melden uns innerhalb weniger Stunden bei Ihnen.</p>
      </div>
      <form onSubmit={handleSubmit} className="px-8 py-8 md:py-10 space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <FormField label="Ihr Name *">
            <input
              required
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Max Mustermann"
              className="field"
            />
          </FormField>
          <FormField label="Telefonnummer *">
            <input
              required
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="01522 …"
              className="field"
            />
          </FormField>
        </div>
        <FormField label="Gewünschte Leistung *">
          <select required name="service" value={form.service} onChange={handleChange} className="field">
            <option value="">Bitte wählen …</option>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </FormField>
        <div className="grid sm:grid-cols-2 gap-5">
          <FormField label="Wunschtag">
            <input
              type="date"
              name="day"
              value={form.day}
              onChange={handleChange}
              min={new Date().toISOString().split("T")[0]}
              className="field"
            />
          </FormField>
          <FormField label="Wunschzeit">
            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              min="09:00"
              max="19:00"
              className="field"
            />
          </FormField>
        </div>
        <FormField label="Hinweise (optional)">
          <textarea
            name="notes"
            value={form.notes}
            onChange={handleChange}
            rows={3}
            placeholder="z. B. bestimmter Wunsch, besonderer Schnitt …"
            className="field resize-none"
          />
        </FormField>
        <div className="flex flex-wrap gap-3 pt-2">
          <button
            type="submit"
            disabled={loading}
            className="btn-shine inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-3.5 text-sm font-medium hover-lift disabled:opacity-60"
          >
            {loading ? "Wird gesendet …" : "Anfrage absenden →"}
          </button>
          <a
            href={`https://wa.me/4915228330131?text=${encodeURIComponent("Hallo! Ich möchte einen Termin vereinbaren.")}`}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-7 py-3.5 text-sm font-medium hover-lift"
          >
            💬 Per WhatsApp buchen
          </a>
        </div>
        <p className="text-xs text-muted-foreground">
          * Pflichtfelder. Ihre Daten werden nur zur Terminabstimmung genutzt.
        </p>
      </form>
    </div>
  );
}

function MapBlock() {
  return (
    <div className="rounded-3xl overflow-hidden border border-border shadow-soft h-[320px] md:h-[400px]">
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
  );
}

function HoursBlock() {
  const today = new Date().getDay();
  const dayNames = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
  const todayName = dayNames[today];

  return (
    <div className="rounded-3xl bg-cream/70 border border-border p-8 md:p-10 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between">
          <h2 className="font-display text-2xl">Öffnungszeiten</h2>
        </div>
        <dl className="mt-6 divide-y divide-border">
          {hours.map((row) => {
            const closed = row.h === "Geschlossen";
            const isToday = row.d === todayName;
            return (
              <div
                key={row.d}
                className={`flex items-center justify-between py-3 ${isToday ? "text-foreground font-medium" : ""}`}
              >
                <dt className="text-sm flex items-center gap-2">
                  {row.d}
                  {isToday && (
                    <span className="text-[10px] bg-gold/20 text-gold px-2 py-0.5 rounded-full font-normal">Heute</span>
                  )}
                </dt>
                <dd className={`text-sm tabular-nums ${closed ? "text-muted-foreground" : ""}`}>
                  {row.h}
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
      <p className="mt-6 text-xs text-muted-foreground leading-relaxed">
        Walk-ins jederzeit willkommen. Für feste Termine bitte kurz anrufen.
      </p>
    </div>
  );
}

function InfoRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[7rem_1fr] gap-4 items-baseline border-b border-border pb-5">
      <span className="eyebrow">{label}</span>
      <div className="text-base text-foreground/90">{children}</div>
    </div>
  );
}

function FormField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block space-y-1.5">
      <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}


