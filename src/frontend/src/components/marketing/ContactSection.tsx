import { MessageCircle } from 'lucide-react';
import { DiscordIcon } from '../icons/DiscordIcon';
import { WHATSAPP_NUMBER, DISCORD_INVITE_URL } from '../../config/social';

export function ContactSection() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}`;

  return (
    <section className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-7xl font-display font-black tracking-wider text-center mb-24 neon-glow-red leading-tight">
          CONTACT US
        </h2>

        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* WhatsApp Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel rounded-2xl p-14 hover-glow-blue flex flex-col items-center justify-center gap-7 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary group card-elevated border-2 border-primary/40"
          >
            <MessageCircle className="w-20 h-20 text-primary group-hover:scale-110 transition-transform" />
            <div className="text-center">
              <p className="font-display font-bold text-3xl mb-4 neon-glow-blue leading-tight">
                WHATSAPP
              </p>
              <p className="text-lg text-muted-foreground font-cyber font-bold">
                {WHATSAPP_NUMBER}
              </p>
            </div>
          </a>

          {/* Discord Button */}
          <a
            href={DISCORD_INVITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel-alt rounded-2xl p-14 hover-glow-red flex flex-col items-center justify-center gap-7 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-destructive group card-elevated border-2 border-destructive/40"
          >
            <DiscordIcon className="w-20 h-20 text-destructive group-hover:scale-110 transition-transform" />
            <div className="text-center">
              <p className="font-display font-bold text-3xl mb-4 neon-glow-red leading-tight">
                DISCORD
              </p>
              <p className="text-lg text-muted-foreground font-cyber font-bold">
                Join our server
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
