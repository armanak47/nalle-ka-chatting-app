
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  template: `
    <main class="flex items-center justify-center min-h-screen p-4 bg-slate-200 dark:bg-slate-900">
      <div class="w-full max-w-[390px] h-[844px] bg-white dark:bg-slate-800 rounded-[40px] shadow-2xl overflow-hidden border-4 border-black relative">
        <router-outlet></router-outlet>
      </div>
    </main>
  `,
  imports: [RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  // Inject the theme service to initialize it at the root level.
  private themeService = inject(ThemeService);
}