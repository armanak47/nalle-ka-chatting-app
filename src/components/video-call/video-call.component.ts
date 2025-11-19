import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from '../../services/chat.service';
import type { Chat } from '../../types/chat';

@Component({
  selector: 'app-video-call',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-call.component.html',
  styleUrls: ['./video-call.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoCallComponent {
  private route: ActivatedRoute = inject(ActivatedRoute);
  private chatService = inject(ChatService);
  private location: Location = inject(Location);

  chat = signal<Chat | undefined>(undefined);

  constructor() {
    const chatId = this.route.snapshot.paramMap.get('id');
    if (chatId) {
      this.chat.set(this.chatService.getChatById(+chatId));
    }
  }

  endCall(): void {
    this.location.back();
  }
}
