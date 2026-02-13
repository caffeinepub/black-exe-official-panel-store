export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neon-blue/30 glass-panel">
      <div className="container flex h-20 items-center justify-center">
        <div className="flex items-center gap-4">
          <img
            src="/assets/generated/black-exe-logo-transparent.dim_1024x1024.png"
            alt="BLACK EXE Logo"
            className="h-14 w-14 object-contain"
          />
          <div className="flex flex-col">
            <h1 className="text-2xl font-display font-bold tracking-wider neon-glow-blue">
              BLACK EXE
            </h1>
            <p className="text-xs text-neon-purple font-medium tracking-widest">
              OFFICIAL PANEL STORE
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
