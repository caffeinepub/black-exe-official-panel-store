import { MessageCircle } from 'lucide-react';
import { DiscordIcon } from '../icons/DiscordIcon';
import { WHATSAPP_NUMBER, DISCORD_INVITE_URL } from '../../config/social';

export function ContactSection() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}`;

  return (
    <section className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-display font-black tracking-wider text-center mb-12 neon-glow-purple">
          CONTACT US
        </h2>

        <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* WhatsApp Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel rounded-lg p-8 hover-glow-blue flex flex-col items-center justify-center gap-4 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neon-blue group"
          >
            <MessageCircle className="w-12 h-12 text-neon-blue group-hover:scale-110 transition-transform" />
            <div className="text-center">
              <p className="font-display font-bold text-lg mb-1 neon-glow-blue">
                WHATSAPP
              </p>
              <p className="text-sm text-neon-cyan font-cyber">
                {WHATSAPP_NUMBER}
              </p>
            </div>
          </a>

          {/* Discord Button */}
          <a
            href={DISCORD_INVITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel-purple rounded-lg p-8 hover-glow-purple flex flex-col items-center justify-center gap-4 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neon-purple group"
          >
            <DiscordIcon className="w-12 h-12 text-neon-purple group-hover:scale-110 transition-transform" />
            <div className="text-center">
              <p className="font-display font-bold text-lg mb-1 neon-glow-purple">
                DISCORD
              </p>
              <p className="text-sm text-neon-cyan font-cyber break-all">
                {DISCORD_INVITE_URL}
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
