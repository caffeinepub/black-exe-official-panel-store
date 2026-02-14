import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/useTheme';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="relative border-2 border-primary/50 bg-background/50 backdrop-blur-sm hover:bg-primary/10 hover:border-primary transition-all duration-300"
      aria-label="Toggle theme"
    >
      <Sun className={`h-5 w-5 text-primary transition-all duration-300 ${theme === 'dark' ? 'rotate-90 scale-0' : 'rotate-0 scale-100'}`} />
      <Moon className={`absolute h-5 w-5 text-primary transition-all duration-300 ${theme === 'dark' ? 'rotate-0 scale-100' : '-rotate-90 scale-0'}`} />
    </Button>
  );
}
