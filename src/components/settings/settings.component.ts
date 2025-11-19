import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomNavComponent } from '../bottom-nav/bottom-nav.component';
import { ThemeService } from '../../services/theme.service';

interface Setting {
  icon: string;
  name: string;
  description?: string;
}

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, BottomNavComponent],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent {
  private themeService = inject(ThemeService);

  user = {
    name: 'John Doe',
    status: 'Available',
    avatarUrl: 'https://avatar.iran.liara.run/public/1'
  };

  settings = signal<Setting[]>([
    { icon: 'key', name: 'Account', description: 'Privacy, security, change number' },
    { icon: 'notifications', name: 'Notifications', description: 'Messages, group & call tones' },
    { icon: 'lock', name: 'Privacy', description: 'Block contacts, disappearing messages' },
    { icon: 'palette', name: 'Appearance', description: 'Theme, wallpapers, chat history' },
    { icon: 'language', name: 'Language', description: 'English (US)' },
    { icon: 'help_outline', name: 'Help', description: 'Help center, contact us, privacy policy' },
    { icon: 'group', name: 'Invite a friend' },
  ]);

  darkMode = computed(() => this.themeService.theme() === 'dark');

  toggleDarkMode() {
    this.themeService.toggleTheme();
  }
}
