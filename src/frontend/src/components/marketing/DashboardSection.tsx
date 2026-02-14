import { useState } from 'react';
import { Gamepad2, UserCog, Headphones, Activity, CreditCard, ArrowRight } from 'lucide-react';
import { PaymentPanel } from './PaymentPanel';
import { WHATSAPP_NUMBER, DISCORD_INVITE_URL } from '../../config/social';

type DashboardTab = 'panels' | 'profile' | 'support' | 'status' | 'payment';

interface DashboardSectionProps {
  onNavigateToPanels?: () => void;
}

export function DashboardSection({ onNavigateToPanels }: DashboardSectionProps) {
  const [activeTab, setActiveTab] = useState<DashboardTab | null>(null);

  const tabs = [
    { id: 'panels' as const, label: 'Panels', icon: Gamepad2, color: 'text-primary' },
    { id: 'payment' as const, label: 'Payment', icon: CreditCard, color: 'text-accent' },
    { id: 'profile' as const, label: 'Profile Changer', icon: UserCog, color: 'text-muted-foreground' },
    { id: 'support' as const, label: 'Support', icon: Headphones, color: 'text-accent' },
    { id: 'status' as const, label: 'Status', icon: Activity, color: 'text-destructive' },
  ];

  return (
    <section id="dashboard-section" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-7xl font-display font-black tracking-wider text-center mb-24 neon-glow-blue leading-tight">
          DASHBOARD
        </h2>

        {/* Tab Navigation */}
        <div className="max-w-5xl mx-auto mb-14">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    dashboard-tab
                    ${activeTab === tab.id ? 'active' : ''}
                  `}
                >
                  <Icon className={`w-10 h-10 mx-auto mb-4 ${tab.color}`} />
                  <p className="font-cyber font-bold text-lg text-center leading-tight text-foreground">
                    {tab.label}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content - Only shown when a tab is selected */}
        {activeTab && (
          <div className="max-w-4xl mx-auto">
            {activeTab === 'panels' && (
              <div className="glass-panel p-10 md:p-12 rounded-3xl card-elevated border-2 border-primary/40">
                <h3 className="text-4xl font-display font-bold mb-6 neon-glow-blue leading-tight">
                  Your Panels
                </h3>
                <p className="text-xl text-muted-foreground font-cyber mb-10 leading-relaxed font-semibold">
                  Browse and purchase gaming panels from our collection. All panels are premium quality with instant delivery.
                </p>
                <button
                  onClick={onNavigateToPanels}
                  className="w-full md:w-auto py-5 px-10 glass-panel-alt rounded-xl font-cyber font-bold text-xl tracking-wide hover-glow-blue transition-all duration-300 flex items-center justify-center gap-4 group border-2 border-primary/40 text-foreground"
                >
                  <span>Browse Available Panels</span>
                  <ArrowRight className="w-6 h-6 text-primary group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            )}

            {activeTab === 'payment' && (
              <div>
                <PaymentPanel />
              </div>
            )}

            {activeTab === 'profile' && (
              <div className="glass-panel p-10 md:p-12 rounded-3xl card-elevated border-2 border-primary/40">
                <h3 className="text-4xl font-display font-bold mb-6 neon-glow-blue leading-tight">
                  Profile Changer
                </h3>
                <p className="text-xl text-muted-foreground font-cyber mb-10 leading-relaxed font-semibold">
                  Change your gaming profile settings and customize your experience. Contact support for profile modification services.
                </p>
                <div className="glass-panel-alt p-7 rounded-xl border-2 border-accent/40">
                  <p className="text-lg text-center font-cyber font-semibold leading-relaxed text-foreground">
                    Profile customization services available. Contact us via WhatsApp or Discord for assistance.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'support' && (
              <div className="glass-panel p-10 md:p-12 rounded-3xl card-elevated border-2 border-primary/40">
                <h3 className="text-4xl font-display font-bold mb-6 neon-glow-blue leading-tight">
                  Support Center
                </h3>
                <p className="text-xl text-muted-foreground font-cyber mb-10 leading-relaxed font-semibold">
                  Need help? Our support team is available 24/7 via WhatsApp and Discord.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-panel-alt p-8 rounded-xl hover-glow-blue transition-all duration-300 flex flex-col items-center justify-center gap-5 group border-2 border-primary/40"
                  >
                    <div className="text-6xl">💬</div>
                    <p className="font-cyber font-bold text-xl text-center leading-tight text-foreground">
                      WhatsApp Support
                    </p>
                    <p className="text-base text-muted-foreground font-cyber font-semibold">
                      {WHATSAPP_NUMBER}
                    </p>
                  </a>
                  <a
                    href={DISCORD_INVITE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-panel-alt p-8 rounded-xl hover-glow-red transition-all duration-300 flex flex-col items-center justify-center gap-5 group border-2 border-destructive/40"
                  >
                    <div className="text-6xl">🎮</div>
                    <p className="font-cyber font-bold text-xl text-center leading-tight text-foreground">
                      Discord Server
                    </p>
                    <p className="text-base text-muted-foreground font-cyber font-semibold">
                      Join Community
                    </p>
                  </a>
                </div>
              </div>
            )}

            {activeTab === 'status' && (
              <div className="glass-panel p-10 md:p-12 rounded-3xl card-elevated border-2 border-primary/40">
                <h3 className="text-4xl font-display font-bold mb-6 neon-glow-blue leading-tight">
                  Service Status
                </h3>
                <p className="text-xl text-muted-foreground font-cyber mb-10 leading-relaxed font-semibold">
                  All systems operational. Check the status of our services below.
                </p>
                <div className="space-y-5">
                  <div className="glass-panel-alt p-6 rounded-xl border-2 border-primary/40 flex items-center justify-between">
                    <span className="font-cyber font-bold text-xl text-foreground">Panel Delivery</span>
                    <span className="px-5 py-2 bg-green-500/20 text-green-400 rounded-lg font-cyber font-bold text-base border border-green-500/40">
                      Operational
                    </span>
                  </div>
                  <div className="glass-panel-alt p-6 rounded-xl border-2 border-primary/40 flex items-center justify-between">
                    <span className="font-cyber font-bold text-xl text-foreground">Payment Gateway</span>
                    <span className="px-5 py-2 bg-green-500/20 text-green-400 rounded-lg font-cyber font-bold text-base border border-green-500/40">
                      Operational
                    </span>
                  </div>
                  <div className="glass-panel-alt p-6 rounded-xl border-2 border-primary/40 flex items-center justify-between">
                    <span className="font-cyber font-bold text-xl text-foreground">Support Services</span>
                    <span className="px-5 py-2 bg-green-500/20 text-green-400 rounded-lg font-cyber font-bold text-base border border-green-500/40">
                      Operational
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
