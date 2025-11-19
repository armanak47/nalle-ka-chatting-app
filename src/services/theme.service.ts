import { effect, Injectable, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  theme = signal<Theme>('light');

  constructor() {
    const storedTheme = localStorage.getItem('app-theme') as Theme | null;
    if (storedTheme) {
      this.theme.set(storedTheme);
    }

    // Use an effect to automatically apply the theme class and save to local storage
    // whenever the theme signal changes.
    effect(() => {
      const currentTheme = this.theme();
      if (currentTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      localStorage.setItem('app-theme', currentTheme);
    });
  }

  toggleTheme(): void {
    this.theme.update(current => (current === 'light' ? 'dark' : 'light'));
  }
}
