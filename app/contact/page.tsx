import { Section } from "../../components/Section";

export default function ContactPage() {
  return (

    <div>
    <div className="relative min-h-screen overflow-hidden bg-[#0D0D0D]">
  
  {/* Background animé */}
  <div className="absolute inset-0 z-0 pointer-events-none">
    <div className="snow"></div>
    <div className="snow snow-slow"></div>
    <div className="stars"></div>
  </div>

  <div className="relative z-10 space-y-12">
  <Section eyebrow="Contact" title="Commander, réserver, échanger.">
        <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6 text-sm leading-relaxed text-white/72">
            <p>
              Pour toute demande de commande, de disponibilité, d&apos;accord
              mets &amp; whiskies ou de collaboration, notre équipe vous
              répondra de manière personnalisée.
            </p>
            <p>
              Nous travaillons principalement sur réservation afin de préserver
              la confidentialité de certaines cuvées et d&apos;offrir un
              accompagnement sur-mesure à chaque client.
            </p>
            <p className="text-[11px] text-white/45">
              La vente d&apos;alcool est strictement réservée aux personnes
              majeures. L&apos;abus d&apos;alcool est dangereux pour la santé.
              À consommer avec modération.
            </p>
          </div>

          <div className="glass-panel relative overflow-hidden px-6 py-7 sm:px-8 sm:py-8">
            <form className="space-y-5 text-sm">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-xs font-medium uppercase tracking-[0.24em] text-white/60"
                >
                  Nom complet
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="w-full rounded-full border border-white/12 bg-black/40 px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-[#C6A75E] focus:outline-none focus:ring-1 focus:ring-[#C6A75E]/60"
                  placeholder="Votre nom"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-xs font-medium uppercase tracking-[0.24em] text-white/60"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full rounded-full border border-white/12 bg-black/40 px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-[#C6A75E] focus:outline-none focus:ring-1 focus:ring-[#C6A75E]/60"
                  placeholder="vous@exemple.com"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-xs font-medium uppercase tracking-[0.24em] text-white/60"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full rounded-2xl border border-white/12 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-[#C6A75E] focus:outline-none focus:ring-1 focus:ring-[#C6A75E]/60"
                  placeholder="Parlez-nous de votre demande, de l'occasion, du nombre de convives..."
                />
              </div>
              <button
                type="submit"
                className="mt-3 inline-flex w-full items-center justify-center rounded-full border border-[#C6A75E]/60 bg-gradient-to-r from-[#3b2a10] via-[#C6A75E]/20 to-[#3b2a10] px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#F5F5F5] shadow-[0_0_24px_rgba(198,167,94,0.45)] transition hover:border-[#C6A75E] hover:shadow-[0_0_32px_rgba(198,167,94,0.75)]"
              >
                Envoyer la demande
              </button>
            </form>
          </div>
        </div>
      </Section>
  </div>

</div>

      
    </div>
  );
}

