import { useState } from 'react';
import { SiWhatsapp, SiDiscord } from 'react-icons/si';
import { ExternalLink, Copy, Check } from 'lucide-react';
import { buildPaymentProofWhatsAppLink } from '../../utils/paymentProof';
import { DISCORD_INVITE_URL } from '../../config/social';
import { UPI_ID } from '../../config/payment';

interface PaymentPanelProps {
  panelName?: string;
}

export function PaymentPanel({ panelName }: PaymentPanelProps) {
  const [copied, setCopied] = useState(false);

  const copyUpiId = async () => {
    try {
      await navigator.clipboard.writeText(UPI_ID);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const whatsappLink = buildPaymentProofWhatsAppLink(panelName);

  return (
    <div className="glass-panel p-6 md:p-8 rounded-xl">
      <h3 className="text-2xl md:text-3xl font-display font-bold mb-6 neon-glow-blue text-center">
        Payment Gateway
      </h3>
      
      <div className="space-y-8">
        {/* UPI ID Display Section */}
        <div className="space-y-6">
          <div className="text-center">
            <h4 className="text-xl font-cyber font-bold mb-2 text-neon-cyan">
              Pay via UPI
            </h4>
            <p className="text-gray-400 text-sm font-cyber">
              Use any UPI app to complete payment
            </p>
          </div>

          {/* UPI ID Card */}
          <div className="glass-panel-purple p-6 rounded-lg border-2 border-neon-purple/30">
            <p className="text-sm font-cyber text-gray-400 mb-2 text-center">
              UPI ID
            </p>
            <div className="flex items-center justify-center gap-3 mb-4">
              <p className="text-2xl md:text-3xl font-display font-bold text-neon-cyan tracking-wide">
                {UPI_ID}
              </p>
            </div>
            <button
              onClick={copyUpiId}
              className="w-full py-3 px-6 glass-panel rounded-lg font-cyber font-bold tracking-wide hover-glow-blue transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              {copied ? (
                <>
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-green-500">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5 text-neon-blue group-hover:scale-110 transition-transform" />
                  <span>Copy UPI ID</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Payment Instructions */}
        <div className="glass-panel-purple p-6 rounded-lg space-y-4">
          <h4 className="text-lg font-cyber font-bold text-neon-purple mb-4">
            Payment Steps
          </h4>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-neon-purple/20 flex items-center justify-center border border-neon-purple">
                <span className="text-sm font-bold text-neon-purple">1</span>
              </div>
              <p className="text-gray-300 font-cyber text-sm leading-relaxed">
                Copy the UPI ID above
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-neon-purple/20 flex items-center justify-center border border-neon-purple">
                <span className="text-sm font-bold text-neon-purple">2</span>
              </div>
              <p className="text-gray-300 font-cyber text-sm leading-relaxed">
                Open any UPI app (Google Pay, PhonePe, Paytm, etc.)
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-neon-purple/20 flex items-center justify-center border border-neon-purple">
                <span className="text-sm font-bold text-neon-purple">3</span>
              </div>
              <p className="text-gray-300 font-cyber text-sm leading-relaxed">
                Paste the UPI ID and complete payment
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-neon-purple/20 flex items-center justify-center border border-neon-purple">
                <span className="text-sm font-bold text-neon-purple">4</span>
              </div>
              <p className="text-gray-300 font-cyber text-sm leading-relaxed">
                Take a screenshot of the transaction confirmation
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-neon-purple/20 flex items-center justify-center border border-neon-purple">
                <span className="text-sm font-bold text-neon-purple">5</span>
              </div>
              <p className="text-gray-300 font-cyber text-sm leading-relaxed">
                Send payment proof using WhatsApp or Discord below
              </p>
            </div>
          </div>
        </div>

        {/* Send Payment Proof Section */}
        <div className="space-y-4">
          <h4 className="text-lg font-cyber font-bold text-center text-neon-cyan">
            Confirm Payment
          </h4>
          <p className="text-center text-gray-400 text-sm font-cyber">
            Share your transaction screenshot to receive instant access
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* WhatsApp Button */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-6 py-4 glass-panel rounded-lg font-cyber font-bold tracking-wide hover-glow-blue transition-all duration-300 group"
            >
              <SiWhatsapp className="w-6 h-6 text-green-500 group-hover:scale-110 transition-transform" />
              <span>WhatsApp</span>
              <ExternalLink className="w-4 h-4 opacity-50" />
            </a>

            {/* Discord Button */}
            <a
              href={DISCORD_INVITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-6 py-4 glass-panel rounded-lg font-cyber font-bold tracking-wide hover-glow-purple transition-all duration-300 group"
            >
              <SiDiscord className="w-6 h-6 text-[#5865F2] group-hover:scale-110 transition-transform" />
              <span>Discord</span>
              <ExternalLink className="w-4 h-4 opacity-50" />
            </a>
          </div>
        </div>

        {/* Important Note */}
        <div className="p-4 glass-panel rounded-lg border border-neon-cyan/30">
          <p className="text-sm text-gray-400 font-cyber leading-relaxed">
            <strong className="text-neon-cyan">Important:</strong> Please include the panel name in your message when sending payment proof for faster processing.
          </p>
        </div>
      </div>
    </div>
  );
}
