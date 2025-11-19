import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomNavComponent } from '../bottom-nav/bottom-nav.component';
import type { Call } from '../../types/call';

type CallFilter = 'All' | 'Missed';

@Component({
  selector: 'app-call-history',
  standalone: true,
  imports: [CommonModule, BottomNavComponent],
  templateUrl: './call-history.component.html',
  styleUrls: ['./call-history.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CallHistoryComponent {
  callFilters: CallFilter[] = ['All', 'Missed'];
  activeFilter = signal<CallFilter>('All');

  calls = signal<Call[]>([
    {
      id: 1,
      user: { id: 102, name: 'Ana', avatarUrl: 'https://avatar.iran.liara.run/public/12' },
      type: 'video',
      direction: 'incoming',
      status: 'missed',
      timestamp: '2 hours ago',
    },
    {
      id: 2,
      user: { id: 103, name: 'Farhan', avatarUrl: 'https://avatar.iran.liara.run/public/50' },
      type: 'voice',
      direction: 'outgoing',
      status: 'answered',
      timestamp: 'Yesterday, 8:15 PM',
    },
    {
      id: 3,
      user: { id: 105, name: 'Sarah', avatarUrl: 'https://avatar.iran.liara.run/public/25' },
      type: 'voice',
      direction: 'incoming',
      status: 'answered',
      timestamp: 'Yesterday, 6:30 PM',
    },
    {
      id: 4,
      user: { id: 101, name: 'Emily', avatarUrl: 'https://avatar.iran.liara.run/public/3' },
      type: 'video',
      direction: 'incoming',
      status: 'missed',
      timestamp: 'October 12, 11:00 AM',
    },
    {
      id: 5,
      user: { id: 104, name: 'Amir', avatarUrl: 'https://avatar.iran.liara.run/public/81' },
      type: 'voice',
      direction: 'outgoing',
      status: 'answered',
      timestamp: 'October 12, 9:45 AM',
    }
  ]);

  filteredCalls = computed(() => {
    const filter = this.activeFilter();
    if (filter === 'All') {
      return this.calls();
    }
    return this.calls().filter(call => call.status === 'missed');
  });

  selectFilter(filter: CallFilter) {
    this.activeFilter.set(filter);
  }

  getCallStatusIcon(call: Call): string {
    if (call.status === 'missed') {
      return 'call_missed';
    }
    return call.direction === 'outgoing' ? 'call_made' : 'call_received';
  }
}
