"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-[#0D0D0D] text-white overflow-hidden">

      {/* HERO IMMERSIF */}
      <section className="relative h-[90vh] flex items-center justify-center text-center">
        <Image
          src="/images/about.PNG"
          alt="Whisky barrel"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-3xl px-6"
        >
          <h1 className="text-5xl md:text-7xl font-serif text-[#C6A75E]">
            L’Art du Temps
          </h1>
          <p className="mt-6 text-lg text-white/70 leading-relaxed">
            Chaque bouteille raconte une histoire façonnée par le bois,
            la lumière et les années.
          </p>
        </motion.div>
      </section>

      {/* SECTION HISTOIRE */}
      <section className="py-24 px-6 md:px-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=1200"
              alt="Whisky glass"
              width={600}
              height={700}
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 text-white/70 leading-relaxed"
          >
            <h2 className="text-4xl font-serif text-[#F5F5F5]">
              Une maison indépendante
            </h2>
            <p>
              Sofinez sélectionne des whiskies rares avec une approche
              presque horlogère : observer, goûter, laisser reposer,
              recommencer.
            </p>
            <p>
              Nous privilégions les distilleries discrètes, celles qui
              laissent parler le temps plutôt que le marketing.
            </p>
          </motion.div>

        </div>
      </section>

      {/* SECTION VALEURS AVEC IMAGE FOND PARALLAX */}
      <section className="relative py-32 px-6 text-center">
        <Image
          src="/images/rosemary.jpg"
          alt="Whisky atmosphere"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/80" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-[#C6A75E]">
            Nos Valeurs
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-10 text-white/70">
            <div>
              <h3 className="text-xl text-white font-semibold">
                Excellence
              </h3>
              <p className="mt-3 text-sm">
                Sélection indépendante et radicalement exigeante.
              </p>
            </div>
            <div>
              <h3 className="text-xl text-white font-semibold">
                Rareté
              </h3>
              <p className="mt-3 text-sm">
                Séries limitées, numérotées et traçables.
              </p>
            </div>
            <div>
              <h3 className="text-xl text-white font-semibold">
                Respect
              </h3>
              <p className="mt-3 text-sm">
                Fidélité au travail des distilleries partenaires.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SECTION RITUEL */}
      <section className="py-24 px-6 md:px-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-serif text-[#F5F5F5]">
              Une expérience pensée comme un rituel
            </h2>
            <p className="text-white/70 leading-relaxed">
              Du choix de la bouteille à la lumière dans le verre,
              chaque détail compte.
            </p>
            <p className="text-white/70 leading-relaxed">
              Notre vision est contemporaine, architecturale,
              mais profondément enracinée dans la tradition.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/wisky5-removebg.PNG"
              alt="Premium whisky bottle"
              width={600}
              height={700}
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>

        </div>
      </section>

    </div>
  );
}