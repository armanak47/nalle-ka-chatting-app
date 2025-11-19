import type { User } from './chat';

export interface Status {
  id: number;
  user: User;
  imageUrl: string;
  timestamp: string;
  viewed: boolean;
}
