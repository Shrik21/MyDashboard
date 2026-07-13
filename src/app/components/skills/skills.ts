import { Component, ElementRef, AfterViewInit, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { portfolioData } from '../../data/portfolio';
import { MatIconModule } from '@angular/material/icon';
import { animate, stagger, inView } from 'motion';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <section id="skills" class="py-20 border-t border-[var(--border)] relative">
      <div class="max-w-5xl skills-container">
        
        <div class="flex items-center gap-4 mb-12 skills-header opacity-0">
          <h2 class="text-3xl font-display font-bold tracking-tight text-[var(--foreground)]">Technical Radar</h2>
          <div class="h-px bg-[var(--border)] flex-grow"></div>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (category of objectKeys(portfolio.skills); track category) {
            <div class="p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)] skills-item opacity-0 shadow-sm hover:-translate-y-1 transition-transform">
              <div class="flex items-center gap-3 mb-6">
                <div class="p-2 rounded-lg bg-[var(--primary)]/10 text-[var(--primary)]">
                  <mat-icon>{{getCategoryIcon(category)}}</mat-icon>
                </div>
                <h3 class="font-display font-bold text-lg text-[var(--foreground)] capitalize">{{formatCategory(category)}}</h3>
              </div>
              
              <div class="flex flex-wrap gap-2">
                @for (skill of portfolio.skills[category]; track skill) {
                  <span class="px-3 py-1.5 rounded-lg bg-[var(--muted)] text-sm font-medium text-[var(--foreground)]">
                    {{skill}}
                  </span>
                }
              </div>
            </div>
          }
        </div>

      </div>
    </section>
  `
})
export class SkillsComponent implements AfterViewInit {
  portfolio: any = portfolioData;

  objectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  formatCategory(cat: string): string {
    return cat.replace(/([A-Z])/g, ' $1').trim();
  }

  getCategoryIcon(cat: string): string {
    const icons: Record<string, string> = {
      backend: 'dns',
      frontend: 'web',
      databases: 'database',
      cloudDevOps: 'cloud',
      architecture: 'architecture',
      messaging: 'dynamic_feed',
      aiTools: 'smart_toy',
      methodologies: 'group_work'
    };
    return icons[cat] || 'code';
  }

  constructor(private el: ElementRef) {}
  platformId = inject(PLATFORM_ID);

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const header = this.el.nativeElement.querySelector('.skills-header');
      const items = this.el.nativeElement.querySelectorAll('.skills-item');
      
      inView(this.el.nativeElement, () => {
        animate(header, { opacity: [0, 1], y: [20, 0] }, { duration: 0.6, ease: "easeOut" });
        animate(items, { opacity: [0, 1], scale: [0.95, 1] }, { delay: stagger(0.1), duration: 0.6, ease: "easeOut" });
      });
    }
  }
}
