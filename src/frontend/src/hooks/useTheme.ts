import { useEffect, useState } from 'react';

type Theme = 'dark';

export function useTheme() {
  const [theme] = useState<Theme>('dark');

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light');
    root.classList.add('dark');
    
    // Force dark mode, remove any stored light theme preference
    localStorage.setItem('theme', 'dark');
  }, []);

  return {
    theme,
    setTheme: () => {
      // No-op: theme is always dark
    },
    toggleTheme: () => {
      // No-op: theme is always dark
    },
  };
}
