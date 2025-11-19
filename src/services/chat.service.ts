
import { Injectable, signal } from '@angular/core';
import type { Chat } from '../types/chat';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  #chats = signal<Chat[]>([
    {
      id: 1,
      user: { id: 101, name: 'Emily', avatarUrl: 'https://avatar.iran.liara.run/public/3' },
      lastMessage: 'Wanna lunch with me?',
      timestamp: '9:41 AM',
      unreadCount: 2,
      isPinned: true,
      isPhoto: false,
      isFromYou: false,
      readStatus: 'delivered',
      category: 'Family',
      online: true,
    },
    {
      id: 2,
      user: { id: 102, name: 'Ana', avatarUrl: 'https://avatar.iran.liara.run/public/12' },
      lastMessage: 'Photo',
      timestamp: '9:34 AM',
      unreadCount: 1,
      isPinned: true,
      isPhoto: true,
      isFromYou: false,
      readStatus: 'delivered',
      category: 'Office',
      online: true,
    },
    {
      id: 3,
      user: { id: 103, name: 'Farhan', avatarUrl: 'https://avatar.iran.liara.run/public/50' },
      lastMessage: 'Okayy',
      timestamp: '7:00 AM',
      unreadCount: 0,
      isPinned: false,
      isPhoto: false,
      isFromYou: true,
      readStatus: 'read',
      category: 'Office',
      online: false,
    },
    {
      id: 4,
      user: { id: 104, name: 'Amir', avatarUrl: 'https://avatar.iran.liara.run/public/81' },
      lastMessage: 'Photo',
      timestamp: 'Yesterday',
      unreadCount: 0,
      isPinned: false,
      isPhoto: true,
      isFromYou: true,
      readStatus: 'read',
      category: 'Family',
      online: false,
    },
     {
      id: 5,
      user: { id: 105, name: 'Sarah', avatarUrl: 'https://avatar.iran.liara.run/public/25' },
      lastMessage: 'See you tomorrow!',
      timestamp: 'Yesterday',
      unreadCount: 0,
      isPinned: false,
      isPhoto: false,
      isFromYou: false,
      readStatus: 'read',
      category: 'Office',
      online: true,
    },
  ]);

  public chats = this.#chats.asReadonly();

  getChatById(id: number): Chat | undefined {
    return this.chats().find(chat => chat.id === id);
  }
}
