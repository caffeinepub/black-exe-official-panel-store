import { useState, useEffect } from 'react';
import { SiWhatsapp, SiDiscord } from 'react-icons/si';
import { ExternalLink, Copy, Check, RotateCcw } from 'lucide-react';
import { buildPaymentProofWhatsAppLink } from '../../utils/paymentProof';
import { DISCORD_INVITE_URL } from '../../config/social';
import { UPI_ID } from '../../config/payment';
import { type Panel } from '../../data/panels';
import { Button } from '../ui/button';

interface PaymentPanelProps {
  panel?: Panel;
  panelName?: string;
}

const STORAGE_KEY_PANEL = 'blackexe_last_panel';
const STORAGE_KEY_DURATION = 'blackexe_last_duration';

export function PaymentPanel({ panel, panelName }: PaymentPanelProps) {
  const [copied, setCopied] = useState(false);
  const [selectedDuration, setSelectedDuration] = useState<string | null>(null);

  // Restore last selected duration on mount
  useEffect(() => {
    if (panel) {
      const savedDuration = localStorage.getItem(STORAGE_KEY_DURATION);
      if (savedDuration && panel.prices.some(p => p.duration === savedDuration)) {
        setSelectedDuration(savedDuration);
      }
    }
  }, [panel]);

  // Save duration to localStorage when changed
  useEffect(() => {
    if (selectedDuration) {
      localStorage.setItem(STORAGE_KEY_DURATION, selectedDuration);
    }
  }, [selectedDuration]);

  const copyUpiId = async () => {
    try {
      await navigator.clipboard.writeText(UPI_ID);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const resetSelection = () => {
    setSelectedDuration(null);
    localStorage.removeItem(STORAGE_KEY_DURATION);
    localStorage.removeItem(STORAGE_KEY_PANEL);
  };

  const selectedPrice = panel && selectedDuration 
    ? panel.prices.find(p => p.duration === selectedDuration)
    : null;

  const whatsappLink = buildPaymentProofWhatsAppLink(
    panel?.name || panelName,
    selectedDuration || undefined,
    selectedPrice?.price
  );

  const displayPanelName = panel?.name || panelName;

  return (
    <div className="glass-panel p-12 md:p-14 rounded-3xl card-elevated border-2 border-primary/40">
      <div className="flex items-center justify-between mb-12">
        <h3 className="text-5xl md:text-6xl font-display font-bold neon-glow-blue leading-tight">
          Payment Gateway
        </h3>
        {(selectedDuration || displayPanelName) && (
          <Button
            onClick={resetSelection}
            variant="outline"
            size="sm"
            className="reset-button font-cyber font-bold gap-2 border-2 border-destructive/40 text-base px-4 py-2"
          >
            <RotateCcw className="w-5 h-5" />
            Reset
          </Button>
        )}
      </div>
      
      <div className="space-y-12">
        {/* Duration Selection - Only show if panel is provided */}
        {panel && (
          <div className="space-y-7">
            <div className="text-center">
              <h4 className="text-3xl font-cyber font-bold mb-4 text-primary leading-tight">
                Select Duration
              </h4>
              <p className="text-muted-foreground text-lg font-cyber font-semibold leading-relaxed">
                Choose your subscription period for {panel.name}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {panel.prices.map((priceOption) => (
                <button
                  key={priceOption.duration}
                  onClick={() => setSelectedDuration(priceOption.duration)}
                  className={`
                    duration-button
                    p-7 rounded-xl font-cyber font-bold text-lg tracking-wide
                    transition-all duration-300 border-2
                    ${selectedDuration === priceOption.duration
                      ? 'duration-button-selected border-primary bg-primary/25 shadow-neon-blue-lg'
                      : 'border-primary/40 glass-panel hover:border-primary hover-glow-blue'
                    }
                  `}
                >
                  <div className="text-center relative z-10">
                    <div className={`text-base mb-3 font-semibold ${selectedDuration === priceOption.duration ? 'text-primary' : 'text-accent'}`}>
                      {priceOption.duration}
                    </div>
                    <div className={`text-2xl font-bold ${selectedDuration === priceOption.duration ? 'text-foreground' : 'text-muted-foreground'}`}>
                      ₹{priceOption.price}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Selected Plan Summary */}
        {displayPanelName && selectedDuration && selectedPrice && (
          <div className="glass-panel-alt p-8 rounded-2xl border-2 border-primary/60 space-y-5 card-elevated">
            <h4 className="text-2xl font-cyber font-bold text-primary text-center mb-6 leading-tight">
              Selected Plan
            </h4>
            <div className="space-y-5">
              <div className="flex justify-between items-center p-4 glass-panel rounded-lg">
                <span className="text-muted-foreground font-cyber text-lg font-semibold">Panel:</span>
                <span className="text-foreground font-display font-bold text-2xl">{displayPanelName}</span>
              </div>
              <div className="flex justify-between items-center p-4 glass-panel rounded-lg">
                <span className="text-muted-foreground font-cyber text-lg font-semibold">Duration:</span>
                <span className="text-accent font-cyber font-bold text-xl">{selectedDuration}</span>
              </div>
              <div className="h-px bg-primary/40 my-4"></div>
              <div className="flex justify-between items-center p-4 glass-panel-alt rounded-lg">
                <span className="text-muted-foreground font-cyber text-lg font-semibold">Amount:</span>
                <span className="text-primary font-display font-bold text-4xl">₹{selectedPrice.price}</span>
              </div>
            </div>
          </div>
        )}

        {/* UPI ID Display Section */}
        <div className="space-y-8">
          <div className="text-center">
            <h4 className="text-3xl font-cyber font-bold mb-4 text-accent leading-tight">
              Pay via UPI
            </h4>
            <p className="text-muted-foreground text-lg font-cyber font-semibold leading-relaxed">
              Use any UPI app to complete payment
            </p>
          </div>

          {/* UPI ID Card */}
          <div className="glass-panel-alt p-9 rounded-2xl border-2 border-accent/50 card-elevated">
            <p className="text-base font-cyber text-muted-foreground mb-5 text-center uppercase tracking-wider font-bold">
              UPI ID
            </p>
            <div className="flex items-center justify-center gap-5 mb-7">
              <p className="text-4xl md:text-5xl font-display font-bold text-accent tracking-wide">
                {UPI_ID}
              </p>
            </div>
            <button
              onClick={copyUpiId}
              className="w-full py-5 px-9 glass-panel rounded-xl font-cyber font-bold text-xl tracking-wide hover-glow-blue transition-all duration-300 flex items-center justify-center gap-4 group border-2 border-primary/40"
            >
              {copied ? (
                <>
                  <Check className="w-7 h-7 text-green-500" />
                  <span className="text-green-500">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
                  <span>Copy UPI ID</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Payment Confirmation Section */}
        <div className="space-y-7">
          <div className="text-center">
            <h4 className="text-3xl font-cyber font-bold mb-4 text-destructive leading-tight">
              After Payment
            </h4>
            <p className="text-muted-foreground text-lg font-cyber font-semibold leading-relaxed">
              Send payment proof via WhatsApp or Discord
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* WhatsApp Button */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel p-8 rounded-xl hover-glow-blue transition-all duration-300 flex flex-col items-center justify-center gap-5 group border-2 border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <SiWhatsapp className="w-14 h-14 text-primary group-hover:scale-110 transition-transform" />
              <div className="text-center">
                <p className="font-cyber font-bold text-xl mb-2 leading-tight">
                  Send via WhatsApp
                </p>
                <p className="text-sm text-muted-foreground font-cyber flex items-center gap-2 justify-center font-semibold">
                  <span>Open chat</span>
                  <ExternalLink className="w-4 h-4" />
                </p>
              </div>
            </a>

            {/* Discord Button */}
            <a
              href={DISCORD_INVITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel-alt p-8 rounded-xl hover-glow-red transition-all duration-300 flex flex-col items-center justify-center gap-5 group border-2 border-destructive/40 focus:outline-none focus:ring-2 focus:ring-destructive"
            >
              <SiDiscord className="w-14 h-14 text-destructive group-hover:scale-110 transition-transform" />
              <div className="text-center">
                <p className="font-cyber font-bold text-xl mb-2 leading-tight">
                  Join Discord
                </p>
                <p className="text-sm text-muted-foreground font-cyber flex items-center gap-2 justify-center font-semibold">
                  <span>Get support</span>
                  <ExternalLink className="w-4 h-4" />
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* Important Note */}
        <div className="glass-panel-alt p-7 rounded-xl border-2 border-destructive/40">
          <p className="text-base text-muted-foreground font-cyber text-center leading-relaxed font-semibold">
            <strong className="text-destructive">Important:</strong> Please send your payment screenshot along with your order details to receive instant access to your panel.
          </p>
        </div>
      </div>
    </div>
  );
}
