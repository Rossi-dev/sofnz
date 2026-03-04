"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export type Product = {
  slug: string;
  name: string;
  origin: string;
  year: string;
  price: string;
  type: string;
  image: string;
};

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.article
      whileHover={{
        y: -6,
        scale: 1.02,
        boxShadow: "0 22px 60px rgba(0,0,0,0.75)",
      }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="group flex flex-col overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-b from-white/5 via-white/[0.02] to-black/70 p-4 backdrop-blur-xl"
    >
      <div className="relative mb-6 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#20150d] via-black to-[#120d08]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.3),transparent_55%),radial-gradient(circle_at_80%_0%,rgba(198,167,94,0.5),transparent_55%)] opacity-70 mix-blend-screen" />
        <div className="relative flex h-64 items-end justify-center">
          <div className="pointer-events-none absolute inset-x-10 bottom-6 h-28 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.85),transparent_65%)] blur-2xl" />
          <Image
            src={product.image}
            alt={product.name}
            width={260}
            height={320}
            className="relative z-10 h-56 w-auto object-contain transition duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h3 className="font-heading text-xl text-[#F5F5F5]">
              {product.name}
            </h3>
            <p className="text-xs uppercase tracking-[0.22em] text-white/45">
              {product.origin} • Millésime {product.year}
            </p>
          </div>
          <div className="rounded-full border border-[#C6A75E]/50 bg-[#1c1406] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#C6A75E]">
            {product.type}
          </div>
        </div>

        <div className="mt-1 flex items-center justify-between text-sm text-white/70">
          <span className="text-[13px] text-white/60">Prix indicatif</span>
          <span className="font-semibold text-[#C6A75E]">{product.price}</span>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <Link
            href={`/product/${product.slug}`}
            className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60 transition hover:text-[#C6A75E]"
          >
            Voir les détails
          </Link>
          <span className="h-px w-16 bg-gradient-to-r from-[#C6A75E]/70 via-[#C6A75E] to-transparent opacity-70" />
        </div>
      </div>
    </motion.article>
  );
}

