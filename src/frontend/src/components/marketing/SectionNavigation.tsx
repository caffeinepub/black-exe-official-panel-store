import { Home, LayoutDashboard, Gamepad2, DollarSign, MessageSquare } from 'lucide-react';
import type { AppSection } from '../../App';

interface SectionNavigationProps {
  activeSection: AppSection;
  onSectionChange: (section: AppSection) => void;
}

export function SectionNavigation({ activeSection, onSectionChange }: SectionNavigationProps) {
  const sections: { id: AppSection; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'Home', icon: <Home className="w-5 h-5" /> },
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
    { id: 'panels', label: 'Available Panels', icon: <Gamepad2 className="w-5 h-5" /> },
    { id: 'pricing', label: 'Pricing Table', icon: <DollarSign className="w-5 h-5" /> },
    { id: 'contact', label: 'Contact', icon: <MessageSquare className="w-5 h-5" /> },
  ];

  return (
    <nav className="sticky top-16 z-40 bg-black/80 backdrop-blur-lg border-b border-neon-blue/20">
      <div className="container mx-auto px-4">
        <div className="flex overflow-x-auto scrollbar-hide">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => onSectionChange(section.id)}
              className={`
                flex items-center gap-2 px-6 py-4 font-cyber font-bold text-sm tracking-wide
                whitespace-nowrap transition-all duration-300 relative
                ${
                  activeSection === section.id
                    ? 'text-white nav-active'
                    : 'text-gray-400 hover:text-white nav-inactive'
                }
              `}
            >
              {section.icon}
              <span className="hidden sm:inline">{section.label}</span>
              <span className="sm:hidden">{section.label.split(' ')[0]}</span>
              
              {/* Active indicator */}
              {activeSection === section.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-purple animate-pulse-glow"></div>
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
