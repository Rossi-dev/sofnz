import { Section } from "../../components/Section";
import { ProductCard, type Product } from "../../components/ProductCard";

const products: Product[] = [
  {
    slug: "sofinez-origine-1992",
    name: "Sofinez Origine 1992",
    origin: "Speyside, Écosse",
    year: "1992",
    price: "À partir de 520 €",
    type: "Single Malt",
    image: "/images/wisky1.PNG",
  },
  {
    slug: "sofinez-nocturne-2001",
    name: "Sofinez Nocturne 2001",
    origin: "Islay, Écosse",
    year: "2001",
    price: "À partir de 640 €",
    type: "Peated",
    image: "/images/wisky2.PNG",
  },
  {
    slug: "sofinez-reserve-maitre",
    name: "Sofinez Réserve du Maître",
    origin: "Highlands, Écosse",
    year: "Assemblage",
    price: "À partir de 880 €",
    type: "Blend Prestige",
    image: "/images/wisky3.PNG",
  },
  {
    slug: "sofinez-solstice-1998",
    name: "Sofinez Solstice 1998",
    origin: "Lowlands, Écosse",
    year: "1998",
    price: "À partir de 460 €",
    type: "Single Malt",
    image: "/images/wisky6.PNG",
  },
  {
    slug: "sofinez-eclipse-2003",
    name: "Sofinez Eclipse 2003",
    origin: "Islay, Écosse",
    year: "2003",
    price: "À partir de 710 €",
    type: "Peated",
    image: "/images/wisky7.PNG",
  },
  {
    slug: "sofinez-majestic-blend",
    name: "Sofinez Majestic Blend",
    origin: "Écosse",
    year: "Assemblage",
    price: "À partir de 390 €",
    type: "Blend Prestige",
    image: "/images/wisky8.PNG",
  },
];

const ORIGINS = ["Toutes origines", "Speyside", "Islay", "Highlands", "Lowlands"];
const TYPES = ["Tous types", "Single Malt", "Peated", "Blend Prestige"];

export default function CollectionPage() {
  return (
    <div className="space-y-10">
      <Section
        eyebrow="Collection"
        title="Whiskies sélectionnés, en série limitée."
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <p className="max-w-xl text-sm leading-relaxed text-white/70">
            Une sélection réduite, volontairement exigeante. Chaque référence
            est disponible en quantité très limitée, embouteillée et numérotée
            sous signature Sofinez.
          </p>

          <div className="flex flex-wrap gap-3 text-xs">
            <div className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-2 text-[11px] uppercase tracking-[0.22em] text-white/60">
              <span className="h-2 w-2 rounded-full bg-[#C6A75E]" />
              Filtre visuel (statique)
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-4 text-xs">
          <div className="flex flex-wrap gap-2">
            {ORIGINS.map((o, index) => (
              <button
                key={o}
                type="button"
                className={`rounded-full border px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] ${
                  index === 0
                    ? "border-[#C6A75E]/70 bg-[#1e1508] text-[#F5F5F5]"
                    : "border-white/12 bg-white/5 text-white/60"
                }`}
              >
                {o}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {TYPES.map((t, index) => (
              <button
                key={t}
                type="button"
                className={`rounded-full border px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] ${
                  index === 0
                    ? "border-[#C6A75E]/70 bg-[#1e1508] text-[#F5F5F5]"
                    : "border-white/12 bg-white/5 text-white/60"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </Section>
    </div>
  );
}

