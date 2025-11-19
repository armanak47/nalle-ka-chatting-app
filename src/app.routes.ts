import { Routes } from '@angular/router';
import { ChatScreenComponent } from './components/chat-screen/chat-screen.component';
import { ChatDetailComponent } from './components/chat-detail/chat-detail.component';
import { VoiceCallComponent } from './components/voice-call/voice-call.component';
import { VideoCallComponent } from './components/video-call/video-call.component';

export const routes: Routes = [
  { path: '', component: ChatScreenComponent },
  { 
    path: 'chat/:id', 
    component: ChatDetailComponent,
  },
  { path: 'chat/:id/voice-call', component: VoiceCallComponent },
  { path: 'chat/:id/video-call', component: VideoCallComponent },
];