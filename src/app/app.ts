import {ChangeDetectionStrategy, Component} from '@angular/core';
import {SidebarComponent} from './components/sidebar/sidebar';
import {HeroComponent} from './components/hero/hero';
import {AboutComponent} from './components/about/about';
import {ExperienceComponent} from './components/experience/experience';
import {ProjectsComponent} from './components/projects/projects';
import {SkillsComponent} from './components/skills/skills';
import {AchievementsComponent} from './components/achievements/achievements';
import {HeatmapComponent} from './components/heatmap/heatmap';
import {ContactComponent} from './components/contact/contact';
import {portfolioData} from './data/portfolio';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  standalone: true,
  imports: [
    SidebarComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    SkillsComponent,
    AchievementsComponent,
    HeatmapComponent,
    ContactComponent
  ],
  template: `
    <div class="flex min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--primary)] selection:text-white">
      
      <!-- Mobile Navbar (visible only on small screens) -->
      <header class="md:hidden fixed top-0 left-0 right-0 h-16 bg-[var(--card)]/80 backdrop-blur-md border-b border-[var(--border)] z-50 flex items-center justify-between px-4">
        <div class="font-display font-bold text-lg">SK.</div>
        <button class="p-2 text-[var(--foreground)]" aria-label="Menu">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </button>
      </header>

      <!-- Desktop Sidebar -->
      <app-sidebar class="hidden md:block sticky top-0"></app-sidebar>

      <!-- Main Content Area -->
      <main class="flex-1 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 overflow-x-hidden">
        <app-hero></app-hero>
        <app-about></app-about>
        <app-experience></app-experience>
        <app-heatmap></app-heatmap>
        <app-skills></app-skills>
        <app-projects></app-projects>
        <app-achievements></app-achievements>
        <app-contact></app-contact>
        
        <footer class="py-8 mt-20 border-t border-[var(--border)] text-center text-[var(--muted-foreground)] font-mono text-sm">
          <p>&copy; {{currentYear}} {{portfolio.personal.name}}. Built with Angular 21 & Tailwind CSS.</p>
        </footer>
      </main>

    </div>
  `,
  styleUrl: './app.css',
})
export class App {
  portfolio = portfolioData;
  currentYear = new Date().getFullYear();
}
