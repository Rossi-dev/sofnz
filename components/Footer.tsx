export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-black/40 backdrop-blur-md">
      
      {/* Animation dorée subtile */}
      <div className="absolute inset-0 -z-10">
        <div className="gold-wave"></div>
        <div className="gold-wave gold-wave-slow"></div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        
        <p className="tracking-[0.18em] uppercase">
          © {new Date().getFullYear()} Sofinez. Tous droits réservés.
        </p>

        <p className="max-w-md leading-relaxed text-[11px] text-white/40">
          La vente d&apos;alcool est strictement réservée aux personnes majeures.
          L&apos;abus d&apos;alcool est dangereux pour la santé. À consommer
          avec modération.
        </p>

      </div>
    </footer>
  );
}