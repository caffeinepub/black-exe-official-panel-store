import { PANELS } from '../../data/panels';

export function PricingTableSection() {
  const durations = ['1 DAY', '2 DAYS', '7 DAYS', '1 MONTH', 'PERMANENT'];

  return (
    <section className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-display font-black tracking-wider text-center mb-12 neon-glow-blue">
          PRICING TABLE
        </h2>

        {/* Desktop Table */}
        <div className="hidden lg:block glass-panel rounded-lg p-6 overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-neon-blue/50">
                <th className="text-left py-4 px-4 font-display font-bold text-lg neon-glow-purple">
                  PANEL
                </th>
                {durations.map((duration) => (
                  <th
                    key={duration}
                    className="text-center py-4 px-4 font-cyber font-bold text-sm neon-glow-blue"
                  >
                    {duration}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {PANELS.map((panel, idx) => (
                <tr
                  key={panel.id}
                  className={`border-b border-neon-blue/20 hover:bg-neon-blue/5 transition-colors ${
                    idx % 2 === 0 ? 'bg-black/20' : ''
                  }`}
                >
                  <td className="py-4 px-4 font-display font-bold text-white">
                    {panel.name}
                  </td>
                  {panel.prices.map((price) => (
                    <td
                      key={price.duration}
                      className="text-center py-4 px-4 font-bold text-neon-cyan"
                    >
                      {price.price} INR
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-4">
          {PANELS.map((panel) => (
            <div key={panel.id} className="glass-panel rounded-lg p-4">
              <h3 className="text-xl font-display font-bold mb-4 neon-glow-purple text-center">
                {panel.name}
              </h3>
              <div className="space-y-2">
                {panel.prices.map((price) => (
                  <div
                    key={price.duration}
                    className="flex justify-between items-center py-2 px-3 rounded bg-black/40 border border-neon-blue/20"
                  >
                    <span className="text-sm font-cyber font-semibold text-neon-cyan">
                      {price.duration}
                    </span>
                    <span className="text-base font-bold text-white">
                      {price.price} INR
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
