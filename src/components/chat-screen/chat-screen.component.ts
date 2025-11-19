
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import type { ChatCategory } from '../../types/chat';
import { ChatService } from '../../services/chat.service';

type NavItem = 'chats' | 'groups' | 'calls' | 'camera';

@Component({
  selector: 'app-chat-screen',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './chat-screen.component.html',
  styleUrls: ['./chat-screen.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatScreenComponent {
  
  private chatService = inject(ChatService);
  chats = this.chatService.chats;

  chatCategories: ChatCategory[] = ['All', 'Office', 'Family', 'Archive'];
  activeCategory = signal<ChatCategory>('All');

  bottomNavItems: {id: NavItem, icon: string, label: string, notification?: boolean}[] = [
    { id: 'chats', icon: 'chat_bubble', label: 'Chats' },
    { id: 'groups', icon: 'apps', label: 'Apps' },
    { id: 'calls', icon: 'call', label: 'Calls', notification: true },
    { id: 'camera', icon: 'photo_camera', label: 'Camera', notification: true }
  ];
  activeBottomNav = signal<NavItem>('chats');

  filteredChats = computed(() => {
    const category = this.activeCategory();
    if (category === 'All') {
      return this.chats();
    }
    return this.chats().filter(chat => chat.category === category);
  });
  
  pinnedChats = computed(() => this.filteredChats().filter(chat => chat.isPinned));
  conversationChats = computed(() => this.filteredChats().filter(chat => !chat.isPinned));

  selectCategory(category: ChatCategory) {
    this.activeCategory.set(category);
  }

  selectBottomNav(item: NavItem) {
    this.activeBottomNav.set(item);
  }
}