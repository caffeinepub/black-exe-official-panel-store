import { Heart } from 'lucide-react';

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'black-exe-panel-store';
  const caffeineUrl = `https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`;

  return (
    <footer className="border-t border-neon-blue/30 glass-panel py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <p className="text-lg font-display font-bold tracking-wider neon-glow-blue">
            © {currentYear} BLACK EXE – ALL RIGHTS RESERVED
          </p>
          
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-neon-purple fill-neon-purple animate-pulse-glow" />
            <span>using</span>
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon-cyan hover:text-neon-blue transition-colors font-semibold"
            >
              caffeine.ai
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
