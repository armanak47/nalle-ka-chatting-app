import type { User } from './chat';

export type CallType = 'voice' | 'video';
export type CallDirection = 'incoming' | 'outgoing';
export type CallStatus = 'answered' | 'missed';

export interface Call {
  id: number;
  user: User;
  type: CallType;
  direction: CallDirection;
  status: CallStatus;
  timestamp: string;
}
