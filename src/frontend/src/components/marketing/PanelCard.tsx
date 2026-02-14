import { ShoppingCart } from 'lucide-react';
import type { Panel } from '../../data/panels';

interface PanelCardProps {
  panel: Panel;
  onBuy: (panelName: string) => void;
}

export function PanelCard({ panel, onBuy }: PanelCardProps) {
  const lowestPrice = Math.min(...panel.prices.map(p => p.price));
  const highestPrice = Math.max(...panel.prices.map(p => p.price));

  return (
    <div className="glass-panel rounded-2xl p-7 hover-glow-blue transition-all duration-300 card-elevated group border-2 border-primary/30">
      <div className="flex flex-col h-full">
        <div className="mb-7">
          <h3 className="text-2xl md:text-3xl font-display font-black tracking-wider mb-4 neon-glow-blue group-hover:neon-glow-red transition-all duration-300 leading-tight">
            {panel.name}
          </h3>
          <div className="h-1.5 w-20 bg-gradient-to-r from-primary to-destructive rounded-full shadow-neon-blue"></div>
        </div>

        <div className="flex-1 mb-7">
          <div className="glass-panel-alt p-5 rounded-xl border-2 border-primary/40">
            <p className="text-base font-cyber text-muted-foreground mb-3 font-semibold">Price Range</p>
            <p className="text-3xl font-display font-bold text-foreground leading-tight">
              ₹{lowestPrice} - ₹{highestPrice}
            </p>
          </div>
        </div>

        <button
          onClick={() => onBuy(panel.name)}
          className="w-full py-5 px-7 glass-panel-alt rounded-xl font-cyber font-bold text-lg tracking-wide hover-glow-blue transition-all duration-300 flex items-center justify-center gap-4 group/btn border-2 border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <ShoppingCart className="w-6 h-6 text-primary group-hover/btn:scale-110 transition-transform" />
          <span>BUY NOW</span>
        </button>
      </div>
    </div>
  );
}
