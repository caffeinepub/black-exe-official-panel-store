import { PANELS } from '../../data/panels';

export function PricingTableSection() {
  const durations = ['1 DAY', '2 DAYS', '7 DAYS', '1 MONTH', 'PERMANENT'];

  return (
    <section id="pricing-section" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-7xl font-display font-black tracking-wider text-center mb-24 neon-glow-red leading-tight">
          PRICING TABLE
        </h2>

        {/* Desktop Table View */}
        <div className="hidden lg:block overflow-x-auto">
          <div className="glass-panel rounded-2xl p-8 card-elevated border-2 border-primary/40">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-primary/40">
                  <th className="text-left py-6 px-6 font-display font-bold text-2xl text-primary">
                    Panel Name
                  </th>
                  {durations.map((duration) => (
                    <th
                      key={duration}
                      className="text-center py-6 px-4 font-cyber font-bold text-lg text-accent"
                    >
                      {duration}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {PANELS.map((panel, index) => (
                  <tr
                    key={panel.id}
                    className={`
                      border-b border-border/50 transition-all duration-300
                      ${index % 2 === 0 ? 'bg-primary/5' : 'bg-destructive/5'}
                      hover:bg-primary/15
                    `}
                  >
                    <td className="py-6 px-6 font-cyber font-bold text-xl text-foreground">
                      {panel.name}
                    </td>
                    {durations.map((duration) => {
                      const price = panel.prices.find((p) => p.duration === duration);
                      return (
                        <td
                          key={duration}
                          className="text-center py-6 px-4 font-display font-bold text-xl text-muted-foreground"
                        >
                          {price ? `₹${price.price}` : '—'}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Card View */}
        <div className="lg:hidden space-y-6">
          {PANELS.map((panel) => (
            <div
              key={panel.id}
              className="glass-panel rounded-2xl p-7 card-elevated border-2 border-primary/40"
            >
              <h3 className="text-2xl font-display font-black mb-6 neon-glow-blue leading-tight">
                {panel.name}
              </h3>
              <div className="space-y-4">
                {panel.prices.map((price) => (
                  <div
                    key={price.duration}
                    className="flex justify-between items-center p-4 glass-panel-alt rounded-xl border border-primary/30"
                  >
                    <span className="font-cyber font-bold text-lg text-accent">
                      {price.duration}
                    </span>
                    <span className="font-display font-bold text-2xl text-foreground">
                      ₹{price.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
