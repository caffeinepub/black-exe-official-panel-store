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

  return (
    <div className="min-h-screen bg-black text-white cyber-grid">
      <SiteHeader />
      
      {/* Section Navigation */}
      <SectionNavigation 
        activeSection={activeSection} 
        onSectionChange={handleSectionChange} 
      />
      
      <main className="section-container">
        {activeSection === 'home' && (
          <div className="section-content">
            <HeroSection />
          </div>
        )}
        
        {activeSection === 'dashboard' && (
          <div className="section-content">
            <DashboardSection onNavigateToPanels={() => setActiveSection('panels')} />
          </div>
        )}
        
        {activeSection === 'panels' && (
          <div className="section-content">
            <PanelsSection />
          </div>
        )}
        
        {activeSection === 'pricing' && (
          <div className="section-content">
            <PricingTableSection />
          </div>
        )}
        
        {activeSection === 'contact' && (
          <div className="section-content">
            <ContactSection />
          </div>
        )}
      </main>
      
      <SiteFooter />
    </div>
  );
}

export default App;
