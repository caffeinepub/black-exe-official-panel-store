import { useState } from 'react';
import { SiteHeader } from './components/marketing/SiteHeader';
import { HeroSection } from './components/marketing/HeroSection';
import { DashboardSection } from './components/marketing/DashboardSection';
import { PanelsSection } from './components/marketing/PanelsSection';
import { PricingTableSection } from './components/marketing/PricingTableSection';
import { ContactSection } from './components/marketing/ContactSection';
import { SiteFooter } from './components/marketing/SiteFooter';
import { SectionNavigation } from './components/marketing/SectionNavigation';

export type AppSection = 'home' | 'dashboard' | 'panels' | 'pricing' | 'contact';

function App() {
  const [activeSection, setActiveSection] = useState<AppSection>('home');

  const handleSectionChange = (section: AppSection) => {
    setActiveSection(section);
  };

  const handleNavigateToPanels = () => {
    setActiveSection('panels');
  };

  return (
    <div className="min-h-screen bg-background text-foreground cyber-grid">
      <SiteHeader />
      
      <SectionNavigation 
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
      />

      <main className="relative z-10">
        {activeSection === 'home' && (
          <div className="section-fade-in">
            <HeroSection />
          </div>
        )}

        {activeSection === 'dashboard' && (
          <div className="section-fade-in">
            <DashboardSection onNavigateToPanels={handleNavigateToPanels} />
          </div>
        )}

        {activeSection === 'panels' && (
          <div className="section-fade-in">
            <PanelsSection />
          </div>
        )}

        {activeSection === 'pricing' && (
          <div className="section-fade-in">
            <PricingTableSection />
          </div>
        )}

        {activeSection === 'contact' && (
          <div className="section-fade-in">
            <ContactSection />
          </div>
        )}
      </main>

      <SiteFooter />
    </div>
  );
}

export default App;
