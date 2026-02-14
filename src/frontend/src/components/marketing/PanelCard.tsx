import { ShoppingCart } from 'lucide-react';
import type { Panel } from '../../data/panels';

interface PanelCardProps {
  panel: Panel;
  onBuy: (panelName: string) => void;
}

export function PanelCard({ panel, onBuy }: PanelCardProps) {
  const lowestPrice = Math.min(...panel.prices.map(p => p.price));
  const highestPrice = Math.max(...panel.prices.map(p => p.price));

  const handleCardClick = () => {
    onBuy(panel.name);
  };

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onBuy(panel.name);
  };

  return (
    <div 
      onClick={handleCardClick}
      className="glass-panel rounded-2xl p-7 hover-glow-blue transition-all duration-300 card-elevated group border-2 border-primary/30 cursor-pointer"
    >
      <div className="flex flex-col h-full">
        <div className="mb-7">
          <h3 className="text-2xl md:text-3xl font-display font-black tracking-wider mb-4 neon-glow-blue group-hover:neon-glow-red transition-all duration-300 leading-tight">
            {panel.name}
          </h3>
          <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent mb-5"></div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-base font-cyber text-muted-foreground font-semibold">Price Range:</span>
              <span className="text-xl font-display font-bold text-foreground">
                ₹{lowestPrice} - ₹{highestPrice}
              </span>
            </div>
          </div>
        </div>
        
        <button
          onClick={handleButtonClick}
          className="mt-auto w-full py-5 px-7 glass-panel-alt rounded-xl font-cyber font-bold text-xl tracking-wide hover-glow-red transition-all duration-300 flex items-center justify-center gap-4 group/btn border-2 border-destructive/40"
        >
          <ShoppingCart className="w-6 h-6 text-destructive group-hover/btn:scale-110 transition-transform" />
          <span className="text-foreground">Buy Now</span>
        </button>
      </div>
    </div>
  );
}
