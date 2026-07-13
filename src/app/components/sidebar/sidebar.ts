import { Component, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { MatIconModule } from '@angular/material/icon';
import { portfolioData } from '../../data/portfolio';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <aside class="fixed md:sticky top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full md:translate-x-0 border-r border-[var(--border)] bg-[var(--card)] flex flex-col">
      <div class="h-full px-4 py-8 overflow-y-auto flex flex-col justify-between">
        
        <!-- Profile Section -->
        <div>
          <div class="flex items-center mb-8 px-2 gap-3">
            <div class="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-white font-display font-bold text-lg">
              SK
            </div>
            <div>
              <h2 class="font-display font-bold text-[var(--foreground)] tracking-tight">Shreyansh Kumar</h2>
              <p class="text-xs text-[var(--muted-foreground)] font-mono">Senior Engineer</p>
            </div>
          </div>
          
          <ul class="space-y-1 font-medium">
            @for (nav of navItems; track nav.id) {
              <li>
                <a [href]="'#' + nav.id" class="flex items-center p-2 text-[var(--muted-foreground)] rounded-lg hover:bg-[var(--muted)] hover:text-[var(--foreground)] group transition-colors">
                  <mat-icon class="mr-3">{{nav.icon}}</mat-icon>
                  <span class="text-sm">{{nav.label}}</span>
                </a>
              </li>
            }
          </ul>
        </div>
        
        <!-- Bottom Actions -->
        <div class="space-y-4 px-2">
          <div class="flex items-center justify-between text-sm text-[var(--muted-foreground)]">
            <span>Theme</span>
            <button (click)="themeService.toggleTheme()" class="p-2 rounded-lg bg-[var(--muted)] hover:text-[var(--foreground)] transition-colors flex items-center justify-center" aria-label="Toggle dark mode" title="Toggle Theme (Ctrl+J)">
              <mat-icon class="text-base" style="width: 18px; height: 18px; font-size: 18px;">
                {{ themeService.isDarkMode() ? 'light_mode' : 'dark_mode' }}
              </mat-icon>
            </button>
          </div>
          
          <div class="pt-4 border-t border-[var(--border)] flex gap-4">
             <a [href]="'https://' + portfolio.personal.github" target="_blank" class="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors">
               <mat-icon>code</mat-icon>
             </a>
             <a [href]="'https://' + portfolio.personal.linkedin" target="_blank" class="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors">
               <mat-icon>work</mat-icon>
             </a>
             <a [href]="'https://mail.google.com/mail/?view=cm&fs=1&to=' + portfolio.personal.email" target="_blank" class="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors">
               <mat-icon>email</mat-icon>
             </a>
          </div>
        </div>
        
      </div>
    </aside>
  `
})
export class SidebarComponent {
  themeService = inject(ThemeService);
  portfolio = portfolioData;

  navItems = [
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'about', label: 'About', icon: 'person' },
    { id: 'experience', label: 'Experience', icon: 'timeline' },
    { id: 'skills', label: 'Skills & Tech', icon: 'build' },
    { id: 'projects', label: 'Featured Projects', icon: 'folder' },
    { id: 'contact', label: 'Connect 1:1', icon: 'forum' }
  ];
}
