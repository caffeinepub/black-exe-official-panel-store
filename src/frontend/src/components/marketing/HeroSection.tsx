export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Banner Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/black-exe-banner-ultra-premium.dim_1920x720.png"
          alt="BLACK EXE Banner"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-36 md:py-48 text-center">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black tracking-wider mb-12 neon-glow-blue leading-tight text-enhanced animated-glow">
          BLACK EXE
          <br />
          <span className="text-5xl md:text-7xl lg:text-8xl text-glow-white animated-shimmer">OFFICIAL PANEL STORE</span>
        </h1>
        <p className="text-3xl md:text-5xl font-cyber font-bold tracking-wide neon-glow-red mb-20 text-enhanced animated-pulse-text">
          CHEAP & PREMIUM GAMING PANELS
        </p>
        
        {/* Decorative elements */}
        <div className="mt-20 flex justify-center gap-10">
          <div className="h-2 w-48 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full shadow-neon-blue"></div>
          <div className="h-2 w-48 bg-gradient-to-r from-transparent via-destructive to-transparent rounded-full shadow-neon-red"></div>
        </div>
      </div>
    </section>
  );
}
