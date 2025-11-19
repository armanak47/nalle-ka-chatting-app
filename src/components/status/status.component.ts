import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomNavComponent } from '../bottom-nav/bottom-nav.component';
import type { Status } from '../../types/status';

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [CommonModule, BottomNavComponent],
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusComponent {
  myStatus = signal<Partial<Status>>({
    user: {
      id: 0,
      name: 'My Status',
      avatarUrl: 'https://avatar.iran.liara.run/public/1',
    },
    timestamp: 'Tap to add status update',
  });

  recentUpdates = signal<Status[]>([
    {
      id: 1,
      user: { id: 101, name: 'Emily', avatarUrl: 'https://avatar.iran.liara.run/public/3' },
      imageUrl: 'https://picsum.photos/id/1015/200/300',
      timestamp: '15 minutes ago',
      viewed: false,
    },
    {
      id: 2,
      user: { id: 102, name: 'Ana', avatarUrl: 'https://avatar.iran.liara.run/public/12' },
      imageUrl: 'https://picsum.photos/id/1025/200/300',
      timestamp: '45 minutes ago',
      viewed: false,
    },
    {
      id: 3,
      user: { id: 105, name: 'Sarah', avatarUrl: 'https://avatar.iran.liara.run/public/25' },
      imageUrl: 'https://picsum.photos/id/1035/200/300',
      timestamp: '2 hours ago',
      viewed: true,
    }
  ]);
}
