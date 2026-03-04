"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/collection", label: "Collection" },
  { href: "/about", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/5 bg-black/40 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-[#C6A75E] via-amber-500 to-yellow-200 shadow-[0_0_25px_rgba(198,167,94,0.5)]" />
          <div className="flex flex-col leading-none">
            <span className="font-heading text-lg tracking-[0.2em] uppercase text-[#F5F5F5]">
              Sofinez
            </span>
            <span className="text-[11px] uppercase tracking-[0.35em] text-white/50">
              Whisky Collection
            </span>
          </div>
        </motion.div>

        <div className="hidden items-center gap-10 md:flex">
          <div className="flex items-center gap-8 text-sm font-medium uppercase tracking-[0.18em] text-white/60">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative pb-1 transition-colors hover:text-[#C6A75E]"
              >
                <span>{link.label}</span>
                <span className="pointer-events-none absolute inset-x-0 -bottom-0.5 mx-auto h-px w-0 bg-gradient-to-r from-transparent via-[#C6A75E] to-transparent transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>
          <Link
            href="/contact"
            className="rounded-full border border-[#C6A75E]/50 bg-gradient-to-r from-[#1a1408] via-black to-[#1a1408] px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#F5F5F5] shadow-[0_0_18px_rgba(198,167,94,0.35)] transition hover:border-[#C6A75E] hover:shadow-[0_0_30px_rgba(198,167,94,0.65)]"
          >
            Commander
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-white/80 backdrop-blur md:hidden"
          aria-label="Ouvrir le menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.2 }}
          className="border-t border-white/10 bg-black/95 md:hidden"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 text-sm uppercase tracking-[0.18em] text-white/70">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-full px-3 py-2 transition hover:bg-white/5 hover:text-[#C6A75E]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full border border-[#C6A75E]/40 bg-[#1a1408] px-3 py-2 text-center text-xs font-semibold tracking-[0.22em] text-[#F5F5F5]"
            >
              Commander
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}

