import { Heart } from 'lucide-react';

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'unknown-app';
  const caffeineLink = `https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`;

  return (
    <footer className="relative z-10 border-t-2 border-primary/30 glass-panel backdrop-blur-xl mt-20">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="text-base font-cyber text-muted-foreground font-semibold">
            © {currentYear} BLACK EXE – ALL RIGHTS RESERVED
          </p>
          <a
            href={caffeineLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-base font-cyber text-muted-foreground hover:text-primary transition-colors group"
          >
            <span>Built with</span>
            <Heart className="w-5 h-5 text-destructive group-hover:scale-110 transition-transform fill-current" />
            <span>using</span>
            <span className="font-bold text-primary">caffeine.ai</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
