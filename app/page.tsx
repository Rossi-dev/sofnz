"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "../components/Button";
import { Section } from "../components/Section";
import { ProductCard, type Product } from "../components/ProductCard";

const featuredProducts: Product[] = [
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
];

export default function Home() {
  return (
    <div className="space-y-20 md:space-y-24">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border border-white/5 bg-black/60 pt-10 md:pt-4">
        <div className="absolute inset-0">
          <Image
            src="/images/hero.PNG"
            alt="Fond visuel premium Sofinez"
            fill
            priority
            className="object-cover opacity-40"
          />
        </div>

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-0 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,#c6a75e33,transparent)] blur-3xl" />
          <div className="absolute right-0 top-32 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,#7c4b2033,transparent)] blur-3xl" />
        </div>

        <div className="relative grid gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-center px-4 pb-10 pt-6 sm:px-8 sm:pb-12 sm:pt-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#C6A75E]">
              Maison Sofinez • Whisky d&apos;exception
            </p>
            <h1 className="font-heading text-4xl leading-tight text-[#F5F5F5] sm:text-5xl md:text-[3.35rem] md:leading-[1.05]">
              L&apos;excellence du whisky,{" "}
              <span className="gold-gradient-text">réinventée.</span>
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-white/65 sm:text-base">
              Une sélection ultra-confidentielle de whiskies rares, choisis pour
              leur caractère, leur profondeur et leur élégance. Une expérience
              de dégustation pensée comme un rituel, entre ombre et lumière.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button href="/collection">
                Découvrir la collection
              </Button>
              <Button variant="ghost" href="/about">
                Notre philosophie
              </Button>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-6 text-[11px] uppercase tracking-[0.22em] text-white/40">
              <span>Whiskies sélectionnés à la main</span>
              <span className="h-px w-10 bg-white/20" />
              <span>Bouteilles numérotées</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative"
          >
            <div className="glass-panel relative overflow-hidden">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(255,255,255,0.45),transparent_55%),radial-gradient(circle_at_90%_0%,rgba(198,167,94,0.7),transparent_60%)] opacity-90 mix-blend-screen" />
              <div className="relative flex flex-col items-center px-10 pb-10 pt-12">
                <div className="mb-8 text-center text-[11px] uppercase tracking-[0.32em] text-white/55">
                  Édition limitée
                </div>
                <div className="relative flex h-[320px] items-end justify-center">
                  <div className="pointer-events-none absolute inset-x-6 bottom-4 h-36 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.9),transparent_70%)] blur-3xl" />
                  <Image
                    src="/images/wisky4.PNG"
                    alt="Bouteille de whisky Sofinez"
                    width={260}
                    height={360}
                    priority
                    className="relative z-10 h-[280px] w-auto object-contain"
                  />
                </div>
                <div className="mt-8 flex w-full items-center justify-between text-xs text-white/65">
                  <span>Vieillissement long en fûts rares</span>
                  <span className="rounded-full bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-[#C6A75E]">
                    Signature Sofinez
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Notre sélection */}
      <Section
        eyebrow="Notre sélection"
        title="Une collection de whiskies d’exception"
      >
        <p className="mb-10 max-w-2xl text-sm leading-relaxed text-white/65">
          Chaque bouteille est issue de chais confidentiels, sélectionnée pour
          l&apos;équilibre parfait entre puissance aromatique, longueur en
          bouche et élégance. Une invitation à redécouvrir le whisky sous un
          angle résolument contemporain.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </Section>

      {/* Philosophie */}
      <Section
        eyebrow="Notre philosophie"
        title="Le temps, la matière, la lumière."
        align="center"
      >
        <div className="mx-auto max-w-3xl space-y-6 text-sm leading-relaxed text-white/70">
          <p>
            Sofinez est née d&apos;une obsession : sublimer l&apos;art du
            whisky en le débarrassant de tout ce qui est superflu. Ne garder que
            l&apos;essentiel : le temps, la matière, la patience, la précision
            du geste.
          </p>
          <p>
            Nous travaillons main dans la main avec des distilleries
            d&apos;exception et des maîtres de chai qui cultivent la rareté,
            loin de la production de masse. Chaque cuvée que nous embouteillons
            raconte une histoire, un terroir, une lumière.
          </p>
          <p className="text-white/55">
            Plus qu&apos;une simple bouteille, nous proposons une expérience :
            celle d&apos;un moment suspendu, à partager avec ceux qui savent
            reconnaître la différence entre le beau et l&apos;exceptionnel.
          </p>
          <div className="pt-4">
            <Button href="/contact">
              Commander / Nous contacter
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
