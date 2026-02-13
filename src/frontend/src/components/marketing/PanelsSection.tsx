import { useState } from 'react';
import { X } from 'lucide-react';
import { PANELS } from '../../data/panels';
import { PanelCard } from './PanelCard';
import { PaymentPanel } from './PaymentPanel';

export function PanelsSection() {
  const [selectedPanel, setSelectedPanel] = useState<string | null>(null);

  const handleBuy = (panelName: string) => {
    setSelectedPanel(panelName);
  };

  const closePayment = () => {
    setSelectedPanel(null);
  };

  return (
    <section id="panels-section" className="py-16 md:py-24 relative scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-display font-black tracking-wider text-center mb-12 neon-glow-purple">
          AVAILABLE PANELS
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {PANELS.map((panel) => (
            <PanelCard key={panel.id} panel={panel} onBuy={handleBuy} />
          ))}
        </div>
      </div>

      {/* Payment Modal */}
      {selectedPanel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={closePayment}
              className="absolute top-4 right-4 z-10 p-2 glass-panel rounded-lg hover-glow-blue transition-all duration-300"
              aria-label="Close payment panel"
            >
              <X className="w-6 h-6 text-neon-blue" />
            </button>
            <PaymentPanel panelName={selectedPanel} />
          </div>
        </div>
      )}
    </section>
  );
}
