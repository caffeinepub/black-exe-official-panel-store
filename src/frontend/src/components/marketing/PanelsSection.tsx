import { useState, useMemo } from 'react';
import { X, Search, Filter } from 'lucide-react';
import { PANELS, type Panel } from '../../data/panels';
import { PanelCard } from './PanelCard';
import { PaymentPanel } from './PaymentPanel';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Button } from '../ui/button';

const STORAGE_KEY_PANEL = 'blackexe_last_panel';

export function PanelsSection() {
  const [selectedPanel, setSelectedPanel] = useState<Panel | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [durationFilter, setDurationFilter] = useState<string>('all');

  const durations = ['1 DAY', '2 DAYS', '7 DAYS', '1 MONTH', 'PERMANENT'];

  const filteredPanels = useMemo(() => {
    return PANELS.filter((panel) => {
      const matchesSearch = panel.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesDuration = durationFilter === 'all' || 
        panel.prices.some(p => p.duration === durationFilter);
      return matchesSearch && matchesDuration;
    });
  }, [searchQuery, durationFilter]);

  const handleBuy = (panelName: string) => {
    const panel = PANELS.find(p => p.name === panelName);
    if (panel) {
      localStorage.setItem(STORAGE_KEY_PANEL, panel.id);
      setSelectedPanel(panel);
    }
  };

  const closePayment = () => {
    setSelectedPanel(null);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setDurationFilter('all');
  };

  return (
    <section id="panels-section" className="py-24 md:py-32 relative scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-7xl font-display font-black tracking-wider text-center mb-24 neon-glow-red leading-tight">
          AVAILABLE PANELS
        </h2>
        
        {/* Search and Filter Controls */}
        <div className="max-w-4xl mx-auto mb-14 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Search Input */}
            <div className="md:col-span-2 relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-primary z-10" />
              <Input
                type="text"
                placeholder="Search panels by name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-14 h-16 text-lg font-cyber search-control focus-ring-blue font-semibold text-foreground"
              />
            </div>

            {/* Duration Filter */}
            <div className="relative">
              <Filter className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-primary z-10 pointer-events-none" />
              <Select value={durationFilter} onValueChange={setDurationFilter}>
                <SelectTrigger className="h-16 pl-14 text-lg font-cyber search-control focus-ring-blue font-semibold text-foreground">
                  <SelectValue placeholder="Filter by duration" />
                </SelectTrigger>
                <SelectContent className="glass-panel border-2 border-primary/40">
                  <SelectItem value="all" className="font-cyber text-lg font-semibold text-foreground">All Durations</SelectItem>
                  {durations.map((duration) => (
                    <SelectItem key={duration} value={duration} className="font-cyber text-lg font-semibold text-foreground">
                      {duration}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Active Filters Display */}
          {(searchQuery || durationFilter !== 'all') && (
            <div className="flex items-center justify-between glass-panel p-5 rounded-xl border-2 border-primary/40">
              <div className="flex items-center gap-4 flex-wrap">
                <span className="text-base font-cyber text-muted-foreground font-semibold">Active filters:</span>
                {searchQuery && (
                  <span className="px-4 py-2 glass-panel-alt rounded-lg text-base font-cyber border border-primary/40 font-semibold text-foreground">
                    Search: "{searchQuery}"
                  </span>
                )}
                {durationFilter !== 'all' && (
                  <span className="px-4 py-2 glass-panel-alt rounded-lg text-base font-cyber border border-primary/40 font-semibold text-foreground">
                    Duration: {durationFilter}
                  </span>
                )}
              </div>
              <Button
                onClick={clearFilters}
                variant="outline"
                size="sm"
                className="font-cyber font-bold hover-glow-red text-base px-5 py-2"
              >
                Clear All
              </Button>
            </div>
          )}
        </div>

        {/* Panels Grid */}
        {filteredPanels.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
            {filteredPanels.map((panel) => (
              <PanelCard key={panel.id} panel={panel} onBuy={handleBuy} />
            ))}
          </div>
        ) : (
          <div className="empty-state max-w-2xl mx-auto">
            <div className="text-7xl mb-8">🔍</div>
            <h3 className="text-3xl font-display font-bold mb-5 text-foreground leading-tight">
              No Panels Found
            </h3>
            <p className="text-xl text-muted-foreground mb-10 font-cyber font-semibold">
              Try adjusting your search or filters
            </p>
            <Button
              onClick={clearFilters}
              variant="outline"
              size="lg"
              className="font-cyber font-bold text-lg px-8 py-6"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>

      {/* Payment Modal */}
      {selectedPanel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-xl">
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={closePayment}
              className="absolute top-4 right-4 z-10 p-3 glass-panel rounded-full hover-glow-red transition-all duration-300 border-2 border-destructive/40"
              aria-label="Close payment panel"
            >
              <X className="w-7 h-7 text-destructive" />
            </button>
            <PaymentPanel panel={selectedPanel} />
          </div>
        </div>
      )}
    </section>
  );
}
