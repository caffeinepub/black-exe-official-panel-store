export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Banner Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/black-exe-banner.dim_1920x720.png"
          alt="BLACK EXE Banner"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-24 md:py-32 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black tracking-wider mb-6 neon-glow-blue animate-pulse-glow">
          BLACK EXE OFFICIAL PANEL STORE
        </h1>
        <p className="text-xl md:text-3xl font-cyber font-semibold tracking-wide neon-glow-purple">
          CHEAP & PREMIUM GAMING PANELS
        </p>
        
        {/* Decorative elements */}
        <div className="mt-12 flex justify-center gap-4">
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-neon-blue to-transparent"></div>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-neon-purple to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
