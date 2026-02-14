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

  const scrollToSection = (sectionId: AppSection) => {
    const elementId = sectionId === 'home' ? 'hero-section' : `${sectionId}-section`;
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    }
  };

  const handleNavigateToPanels = () => {
    scrollToSection('panels');
  };

  return (
    <div className="min-h-screen bg-background text-foreground cyber-grid">
      <SiteHeader />
      
      <SectionNavigation 
        activeSection={activeSection}
        onSectionChange={scrollToSection}
      />

      <main className="relative z-10">
        <div id="hero-section" className="section-fade-in">
          <HeroSection />
        </div>

        <div id="dashboard-section" className="section-fade-in">
          <DashboardSection onNavigateToPanels={handleNavigateToPanels} />
        </div>

        <div id="panels-section" className="section-fade-in">
          <PanelsSection />
        </div>

        <div id="pricing-section" className="section-fade-in">
          <PricingTableSection />
        </div>

        <div id="contact-section" className="section-fade-in">
          <ContactSection />
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

export default App;
