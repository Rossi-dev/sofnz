"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type SectionProps = {
  title?: string;
  eyebrow?: string;
  align?: "left" | "center";
  children: ReactNode;
};

export function Section({
  title,
  eyebrow,
  align = "left",
  children,
}: SectionProps) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <section className="relative py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -left-32 top-0 h-40 w-40 rounded-full bg-[radial-gradient(circle_at_center,#C6A75E33,transparent)] blur-3xl" />
        <div className="absolute right-0 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,#7c5b3033,transparent)] blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative"
      >
        {(title || eyebrow) && (
          <div className={`mb-10 flex flex-col gap-3 ${alignment}`}>
            {eyebrow && (
              <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#C6A75E]">
                {eyebrow}
              </span>
            )}
            {title && (
              <h2 className="font-heading text-3xl sm:text-4xl md:text-[2.5rem] md:leading-[1.1] text-[#F5F5F5]">
                {title}
              </h2>
            )}
            <div className="mt-2 h-px w-16 bg-gradient-to-r from-[#C6A75E] via-[#C6A75E]/40 to-transparent" />
          </div>
        )}

        <div>{children}</div>
      </motion.div>
    </section>
  );
}

