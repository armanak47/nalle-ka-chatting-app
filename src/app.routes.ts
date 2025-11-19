import { Routes } from '@angular/router';
import { ChatScreenComponent } from './components/chat-screen/chat-screen.component';
import { ChatDetailComponent } from './components/chat-detail/chat-detail.component';
import { VoiceCallComponent } from './components/voice-call/voice-call.component';
import { VideoCallComponent } from './components/video-call/video-call.component';
import { StatusComponent } from './components/status/status.component';
import { CallHistoryComponent } from './components/call-history/call-history.component';
import { SettingsComponent } from './components/settings/settings.component';

export const routes: Routes = [
  { path: '', component: ChatScreenComponent },
  { path: 'status', component: StatusComponent },
  { path: 'calls', component: CallHistoryComponent },
  { path: 'settings', component: SettingsComponent },
  { 
    path: 'chat/:id', 
    component: ChatDetailComponent,
  },
  { path: 'chat/:id/voice-call', component: VoiceCallComponent },
  { path: 'chat/:id/video-call', component: VideoCallComponent },
];