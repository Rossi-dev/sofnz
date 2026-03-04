import Image from "next/image";
import { notFound } from "next/navigation";
import { Section } from "../../../components/Section";
import type { Product } from "../../../components/ProductCard";

const products: (Product & {
  description: string;
  tastingNotes: string[];
})[] = [
  {
    slug: "sofinez-origine-1992",
    name: "Sofinez Origine 1992",
    origin: "Speyside, Écosse",
    year: "1992",
    price: "À partir de 520 €",
    type: "Single Malt",
    image: "/whiskies/sofinez-origine.png",
    description:
      "Un single malt d'une précision remarquable, sélectionné parmi des fûts de premier remplissage ayant reposé plus de trois décennies. Un équilibre rare entre douceur, profondeur et tension aromatique.",
    tastingNotes: [
      "Nez : miel d'acacia, abricot rôti, écorce d'orange confite.",
      "Bouche : texture soyeuse, notes de vanille bourbon, amande grillée, pointe de cire d'abeille.",
      "Finale : très longue, délicatement épicée, avec une rémanence de fruits secs et de bois précieux.",
    ],
  },
  {
    slug: "sofinez-nocturne-2001",
    name: "Sofinez Nocturne 2001",
    origin: "Islay, Écosse",
    year: "2001",
    price: "À partir de 640 €",
    type: "Peated",
    image: "/whiskies/sofinez-nocturne.png",
    description:
      "Une interprétation nocturne de l'île d'Islay : tourbe profonde, fumée enveloppante et élégance inattendue en finale. Un whisky de méditation, taillé pour les palais avertis.",
    tastingNotes: [
      "Nez : fumée de tourbe élégante, algues séchées, cacao amer.",
      "Bouche : attaque puissante, notes de café noir, réglisse, chocolat noir 80%.",
      "Finale : interminable, saline, avec une chaleur patinée et une pointe iodée.",
    ],
  },
  {
    slug: "sofinez-reserve-maitre",
    name: "Sofinez Réserve du Maître",
    origin: "Highlands, Écosse",
    year: "Assemblage",
    price: "À partir de 880 €",
    type: "Blend Prestige",
    image: "/whiskies/sofinez-reserve.png",
    description:
      "Assemblage confidentiel de fûts rares, signé par notre maître assembleur. Une partition aromatique d'une grande complexité, pensée comme un grand vin de garde.",
    tastingNotes: [
      "Nez : fleurs blanches, mirabelle, épices douces, bois de santal.",
      "Bouche : ample, structurée, notes de fruits jaunes, noisette grillée, thé noir.",
      "Finale : harmonieuse, d'une grande tenue, avec une pointe fumée en filigrane.",
    ],
  },
];

type Params = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default function ProductPage({ params }: Params) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    return notFound();
  }

  return (
    <div className="space-y-12">
      <Section eyebrow="Détail produit" title={product.name}>
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="relative">
            <div className="glass-panel relative overflow-hidden">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(255,255,255,0.4),transparent_55%),radial-gradient(circle_at_100%_0%,rgba(198,167,94,0.7),transparent_60%)] opacity-90 mix-blend-screen" />
              <div className="relative flex flex-col items-center px-10 pb-10 pt-12">
                <div className="mb-6 text-[11px] uppercase tracking-[0.3em] text-white/55">
                  {product.origin} • {product.year}
                </div>
                <div className="relative flex h-[340px] items-end justify-center">
                  <div className="pointer-events-none absolute inset-x-10 bottom-4 h-40 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.9),transparent_70%)] blur-3xl" />
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={320}
                    height={420}
                    className="relative z-10 h-[300px] w-auto object-contain"
                  />
                </div>
                <div className="mt-8 flex w-full items-center justify-between text-xs text-white/70">
                  <span>Prix indicatif</span>
                  <span className="font-semibold text-[#C6A75E]">
                    {product.price}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8 text-sm leading-relaxed text-white/72">
            <p className="text-white/75">{product.description}</p>
            <div className="space-y-4">
              <h2 className="font-heading text-lg text-[#F5F5F5]">
                Notes de dégustation
              </h2>
              <ul className="space-y-3 text-sm text-white/70">
                {product.tastingNotes.map((note) => (
                  <li key={note} className="flex gap-3">
                    <span className="mt-1 h-px w-6 flex-none bg-gradient-to-r from-[#C6A75E] to-transparent" />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-2 text-xs text-white/55">
              <p className="uppercase tracking-[0.24em] text-[#C6A75E]">
                Commander / nous contacter
              </p>
              <p>
                Pour toute demande de réservation, de tarification détaillée ou
                de disponibilité, contactez directement la Maison Sofinez via le
                formulaire dédié.
              </p>
              <p className="pt-2 text-[11px] text-white/40">
                La vente d&apos;alcool est strictement réservée aux personnes
                majeures. L&apos;abus d&apos;alcool est dangereux pour la
                santé. À consommer avec modération.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

