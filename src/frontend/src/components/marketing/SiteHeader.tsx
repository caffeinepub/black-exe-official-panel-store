export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-primary/50 glass-panel backdrop-blur-xl shadow-lg">
      <div className="container flex h-28 items-center justify-between px-6">
        <div className="flex items-center gap-6">
          <div className="relative">
            <img
              src="/assets/generated/black-exe-logo-premium-transparent.dim_1024x1024.png"
              alt="BLACK EXE Logo"
              className="h-20 w-20 object-contain drop-shadow-2xl"
            />
            <div className="absolute inset-0 blur-2xl bg-primary/40 -z-10"></div>
          </div>
          <div className="flex flex-col gap-1.5">
            <h1 className="text-4xl font-display font-black tracking-wider neon-glow-blue">
              BLACK EXE
            </h1>
            <p className="text-sm text-accent font-bold tracking-[0.35em] uppercase">
              Official Panel Store
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
