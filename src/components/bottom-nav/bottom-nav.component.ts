import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-bottom-nav',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BottomNavComponent {
  bottomNavItems = [
    { id: 'chats', icon: 'chat_bubble', label: 'Chats', path: '/', exact: true },
    { id: 'status', icon: 'apps', label: 'Status', path: '/status', exact: false },
    { id: 'calls', icon: 'call', label: 'Calls', notification: true, path: '/calls', exact: false },
    { id: 'settings', icon: 'settings', label: 'Settings', path: '/settings', exact: false }
  ];
}