import { type Panel } from '../../data/panels';

interface PanelCardProps {
  panel: Panel;
  onBuy?: (panelName: string) => void;
}

export function PanelCard({ panel, onBuy }: PanelCardProps) {
  const handleCardClick = () => {
    if (onBuy) {
      onBuy(panel.name);
    }
  };

  const handleBuyClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onBuy) {
      onBuy(panel.name);
    }
  };

  return (
    <div
      onClick={handleCardClick}
      className="glass-panel rounded-lg p-6 hover-glow-blue cursor-pointer focus:outline-none focus:ring-2 focus:ring-neon-blue"
      tabIndex={0}
      role="button"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleCardClick();
        }
      }}
    >
      <h3 className="text-2xl font-display font-bold tracking-wider mb-6 neon-glow-blue text-center">
        {panel.name}
      </h3>
      
      <div className="space-y-3 mb-6">
        {panel.prices.map((price) => (
          <div
            key={price.duration}
            className="flex justify-between items-center py-2 px-3 rounded bg-black/40 border border-neon-blue/20"
          >
            <span className="text-sm font-cyber font-semibold text-neon-cyan">
              {price.duration}
            </span>
            <span className="text-lg font-bold text-white">
              {price.price} INR
            </span>
          </div>
        ))}
      </div>

      <button
        onClick={handleBuyClick}
        className="w-full py-3 px-6 rounded-lg font-display font-bold text-lg tracking-wider bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 border-2 border-neon-blue hover:border-neon-purple hover:shadow-neon-blue-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neon-purple neon-glow-blue"
      >
        BUY NOW
      </button>
    </div>
  );
}
