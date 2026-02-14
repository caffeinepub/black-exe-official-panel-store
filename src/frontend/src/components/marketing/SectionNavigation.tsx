import { Home, LayoutDashboard, Gamepad2, DollarSign, MessageSquare } from 'lucide-react';
import type { AppSection } from '../../App';

interface SectionNavigationProps {
  activeSection: AppSection;
  onSectionChange: (section: AppSection) => void;
}

export function SectionNavigation({ activeSection, onSectionChange }: SectionNavigationProps) {
  const sections: { id: AppSection; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'Home', icon: <Home className="w-6 h-6" /> },
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard className="w-6 h-6" /> },
    { id: 'panels', label: 'Available Panels', icon: <Gamepad2 className="w-6 h-6" /> },
    { id: 'pricing', label: 'Pricing Table', icon: <DollarSign className="w-6 h-6" /> },
    { id: 'contact', label: 'Contact', icon: <MessageSquare className="w-6 h-6" /> },
  ];

  return (
    <nav className="sticky top-28 z-40 glass-panel backdrop-blur-xl border-b-2 border-primary/40 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex overflow-x-auto scrollbar-hide gap-3">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => onSectionChange(section.id)}
              className={`
                flex items-center gap-4 px-8 py-6 font-cyber font-bold text-lg tracking-wide
                whitespace-nowrap transition-all duration-300 relative
                ${
                  activeSection === section.id
                    ? 'text-foreground nav-item active'
                    : 'text-muted-foreground nav-item inactive'
                }
              `}
            >
              <span className={activeSection === section.id ? 'text-primary' : ''}>
                {section.icon}
              </span>
              <span className="hidden sm:inline">{section.label}</span>
              <span className="sm:hidden">{section.label.split(' ')[0]}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
