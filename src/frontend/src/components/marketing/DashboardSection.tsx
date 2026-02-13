import { useState } from 'react';
import { Gamepad2, UserCog, Headphones, Activity, CreditCard, ArrowRight } from 'lucide-react';
import { PaymentPanel } from './PaymentPanel';
import { WHATSAPP_NUMBER, DISCORD_INVITE_URL } from '../../config/social';

type DashboardTab = 'panels' | 'profile' | 'support' | 'status' | 'payment';

interface DashboardSectionProps {
  onNavigateToPanels?: () => void;
}

export function DashboardSection({ onNavigateToPanels }: DashboardSectionProps) {
  const [activeTab, setActiveTab] = useState<DashboardTab>('panels');

  const handleTabClick = (tab: DashboardTab) => {
    setActiveTab(tab);
  };

  return (
    <section id="dashboard-section" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-display font-black tracking-wider text-center mb-12 neon-glow-blue">
          DASHBOARD
        </h2>

        {/* Dashboard Navigation Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12 max-w-6xl mx-auto">
          <button
            onClick={() => handleTabClick('panels')}
            className={`dashboard-tab ${
              activeTab === 'panels' ? 'dashboard-tab-active' : ''
            }`}
          >
            <div className="flex flex-col items-center gap-3">
              <Gamepad2 className="w-8 h-8 text-neon-blue" />
              <span className="font-cyber font-bold text-lg tracking-wide">Panels</span>
            </div>
          </button>

          <button
            onClick={() => handleTabClick('payment')}
            className={`dashboard-tab ${
              activeTab === 'payment' ? 'dashboard-tab-active' : ''
            }`}
          >
            <div className="flex flex-col items-center gap-3">
              <CreditCard className="w-8 h-8 text-neon-cyan" />
              <span className="font-cyber font-bold text-lg tracking-wide">Payment</span>
            </div>
          </button>

          <button
            onClick={() => handleTabClick('profile')}
            className={`dashboard-tab ${
              activeTab === 'profile' ? 'dashboard-tab-active' : ''
            }`}
          >
            <div className="flex flex-col items-center gap-3">
              <UserCog className="w-8 h-8 text-neon-purple" />
              <span className="font-cyber font-bold text-lg tracking-wide">Profile Changer</span>
            </div>
          </button>

          <button
            onClick={() => handleTabClick('support')}
            className={`dashboard-tab ${
              activeTab === 'support' ? 'dashboard-tab-active' : ''
            }`}
          >
            <div className="flex flex-col items-center gap-3">
              <Headphones className="w-8 h-8 text-neon-cyan" />
              <span className="font-cyber font-bold text-lg tracking-wide">Support</span>
            </div>
          </button>

          <button
            onClick={() => handleTabClick('status')}
            className={`dashboard-tab ${
              activeTab === 'status' ? 'dashboard-tab-active' : ''
            }`}
          >
            <div className="flex flex-col items-center gap-3">
              <Activity className="w-8 h-8 text-neon-purple" />
              <span className="font-cyber font-bold text-lg tracking-wide">Status</span>
            </div>
          </button>
        </div>

        {/* Dashboard Content */}
        <div className="max-w-4xl mx-auto">
          {activeTab === 'panels' && (
            <div className="glass-panel-purple p-8 rounded-xl">
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 neon-glow-purple">
                Gaming Panels
              </h3>
              <p className="text-gray-300 mb-6 font-cyber text-lg leading-relaxed">
                Browse our collection of premium gaming panels for all major titles. Each panel comes with multiple duration options to fit your needs and budget.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-neon-purple mt-2"></div>
                  <p className="text-gray-300 font-cyber">
                    <strong className="text-white">10+ Premium Panels:</strong> BGMI, Free Fire, COD Mobile, and more
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-neon-purple mt-2"></div>
                  <p className="text-gray-300 font-cyber">
                    <strong className="text-white">Flexible Pricing:</strong> Choose from 1 Day to Permanent access
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-neon-purple mt-2"></div>
                  <p className="text-gray-300 font-cyber">
                    <strong className="text-white">Instant Delivery:</strong> Get your panel access immediately after purchase
                  </p>
                </div>
              </div>
              {onNavigateToPanels && (
                <button
                  onClick={onNavigateToPanels}
                  className="mt-8 px-8 py-3 glass-panel-purple rounded-lg font-cyber font-bold text-lg tracking-wide hover-glow-purple flex items-center gap-2 mx-auto transition-all duration-300"
                >
                  <span>GO TO AVAILABLE PANELS</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              )}
            </div>
          )}

          {activeTab === 'payment' && <PaymentPanel />}

          {activeTab === 'profile' && (
            <div className="glass-panel p-8 rounded-xl">
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 neon-glow-blue">
                Profile Changer
              </h3>
              <p className="text-gray-300 mb-6 font-cyber text-lg leading-relaxed">
                Customize your gaming profile with our advanced profile changer tools. Stand out from the crowd with unique names, avatars, and stats.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-neon-blue mt-2"></div>
                  <p className="text-gray-300 font-cyber">
                    <strong className="text-white">Custom Names:</strong> Change your in-game name with special characters
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-neon-blue mt-2"></div>
                  <p className="text-gray-300 font-cyber">
                    <strong className="text-white">Avatar Customization:</strong> Unlock exclusive avatars and frames
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-neon-blue mt-2"></div>
                  <p className="text-gray-300 font-cyber">
                    <strong className="text-white">Stats Modification:</strong> Customize your profile statistics
                  </p>
                </div>
              </div>
              <div className="mt-8 p-4 glass-panel-purple rounded-lg border border-neon-purple/30">
                <p className="text-sm text-gray-400 font-cyber">
                  <strong className="text-neon-purple">Note:</strong> Profile changer services are available for select games. Contact support for more details.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'support' && (
            <div className="glass-panel p-8 rounded-xl">
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 neon-glow-cyan">
                Customer Support
              </h3>
              <p className="text-gray-300 mb-6 font-cyber text-lg leading-relaxed">
                Need help? Our support team is available 24/7 to assist you with any questions or issues.
              </p>
              <div className="space-y-6">
                <div className="glass-panel-purple p-6 rounded-lg">
                  <h4 className="text-lg font-cyber font-bold text-neon-purple mb-3">
                    Contact Methods
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-neon-cyan"></div>
                      <p className="text-gray-300 font-cyber">
                        <strong className="text-white">WhatsApp:</strong> {WHATSAPP_NUMBER}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-neon-cyan"></div>
                      <p className="text-gray-300 font-cyber">
                        <strong className="text-white">Discord:</strong> Join our server
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-panel p-6 rounded-lg hover-glow-blue transition-all duration-300 text-center font-cyber font-bold"
                  >
                    Contact via WhatsApp
                  </a>
                  <a
                    href={DISCORD_INVITE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-panel-purple p-6 rounded-lg hover-glow-purple transition-all duration-300 text-center font-cyber font-bold"
                  >
                    Join Discord Server
                  </a>
                </div>

                <div className="p-4 glass-panel rounded-lg border border-neon-cyan/30">
                  <p className="text-sm text-gray-400 font-cyber">
                    <strong className="text-neon-cyan">Response Time:</strong> We typically respond within 5-10 minutes during business hours.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'status' && (
            <div className="glass-panel-purple p-8 rounded-xl">
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 neon-glow-purple">
                Service Status
              </h3>
              <p className="text-gray-300 mb-6 font-cyber text-lg leading-relaxed">
                All systems operational. Check the status of our services and panels below.
              </p>
              <div className="space-y-4">
                <div className="glass-panel p-4 rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="font-cyber font-bold">Panel Delivery System</span>
                  </div>
                  <span className="text-green-500 font-cyber text-sm">Operational</span>
                </div>
                <div className="glass-panel p-4 rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="font-cyber font-bold">Payment Gateway</span>
                  </div>
                  <span className="text-green-500 font-cyber text-sm">Operational</span>
                </div>
                <div className="glass-panel p-4 rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="font-cyber font-bold">Customer Support</span>
                  </div>
                  <span className="text-green-500 font-cyber text-sm">Operational</span>
                </div>
                <div className="glass-panel p-4 rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="font-cyber font-bold">All Gaming Panels</span>
                  </div>
                  <span className="text-green-500 font-cyber text-sm">Operational</span>
                </div>
              </div>
              <div className="mt-6 p-4 glass-panel-purple rounded-lg border border-neon-purple/30">
                <p className="text-sm text-gray-400 font-cyber text-center">
                  Last updated: {new Date().toLocaleString()}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
