
export interface User {
  id: number;
  name: string;
  avatarUrl: string;
  status?: string;
}

export type ChatCategory = 'All' | 'Office' | 'Family' | 'Archive';
export type ReadStatus = 'read' | 'delivered' | 'sent';

export interface Chat {
  id: number;
  user: User;
  lastMessage: string;
  timestamp: string;
  unreadCount: number;
  isPinned: boolean;
  isPhoto: boolean;
  isFromYou: boolean;
  readStatus: ReadStatus;
  category: ChatCategory;
  online: boolean;
}
