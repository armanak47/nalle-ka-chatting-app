import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ChatService } from '../../services/chat.service';
import type { Chat } from '../../types/chat';

interface Message {
  id: number;
  text: string;
  time: string;
  sender: 'me' | 'other';
}

@Component({
  selector: 'app-chat-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './chat-detail.component.html',
  styleUrls: ['./chat-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatDetailComponent {
  // Fix: Explicitly typed injected services to resolve TypeScript errors where properties were not recognized.
  private route: ActivatedRoute = inject(ActivatedRoute);
  private chatService = inject(ChatService);
  private location: Location = inject(Location);

  chat = signal<Chat | undefined>(undefined);

  messages = signal<Message[]>([
    { id: 1, text: 'Hey! How have you been?', time: '10:00 AM', sender: 'other' },
    { id: 2, text: 'I am doing great, thanks for asking! What about you? Long time no see.', time: '10:01 AM', sender: 'me' },
    { id: 3, text: 'I\'m good too. Been busy with work. We should catch up sometime!', time: '10:01 AM', sender: 'other' },
    { id: 4, text: 'For sure! How about this weekend?', time: '10:02 AM', sender: 'me' },
    { id: 5, text: 'Wanna lunch with me?', time: '10:03 AM', sender: 'other' },
  ]);

  constructor() {
    const chatId = this.route.snapshot.paramMap.get('id');
    if (chatId) {
      this.chat.set(this.chatService.getChatById(+chatId));
    }
  }

  goBack(): void {
    this.location.back();
  }
}