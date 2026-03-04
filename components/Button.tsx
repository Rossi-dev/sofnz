"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "ghost";
  href?: string;
};

export function Button({ children, variant = "primary", href }: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A75E]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black";

  const variants = {
    primary:
      "border border-[#C6A75E]/60 bg-gradient-to-r from-[#3b2a10] via-[#C6A75E]/20 to-[#3b2a10] text-[#F5F5F5] shadow-[0_0_24px_rgba(198,167,94,0.5)] hover:border-[#C6A75E] hover:shadow-[0_0_36px_rgba(198,167,94,0.8)]",
    ghost:
      "border border-white/15 bg-white/5 text-white/80 hover:border-[#C6A75E]/60 hover:bg-[#C6A75E]/5 hover:text-[#F5F5F5]",
  };

  const content = (
    <motion.span
      whileHover={{ y: -1, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className="flex items-center gap-2"
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} className={`${baseClasses} ${variants[variant]}`}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={`${baseClasses} ${variants[variant]}`}>
      {content}
    </button>
  );
}

