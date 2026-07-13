import { Component, ElementRef, AfterViewInit, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { portfolioData } from '../../data/portfolio';
import { MatIconModule } from '@angular/material/icon';
import { animate, stagger, inView } from 'motion';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <section id="experience" class="py-20 border-t border-[var(--border)] relative">
      <div class="max-w-4xl exp-container">
        
        <div class="flex items-center gap-4 mb-12 exp-header opacity-0">
          <h2 class="text-3xl font-display font-bold tracking-tight text-[var(--foreground)]">Career Journey</h2>
          <div class="h-px bg-[var(--border)] flex-grow"></div>
        </div>

        <div class="relative border-l border-[var(--border)] ml-4 md:ml-6 space-y-12">
          @for (job of portfolio.experience; track job.company) {
            <div class="relative pl-8 md:pl-12 exp-item opacity-0">
              <!-- Timeline node -->
              <div class="absolute -left-[5px] top-1 w-[9px] h-[9px] rounded-full bg-[var(--primary)] outline outline-4 outline-[var(--background)]"></div>
              
              <div class="flex flex-col md:flex-row md:items-baseline justify-between mb-2 gap-2">
                <h3 class="text-xl font-bold text-[var(--foreground)]">{{job.role}}</h3>
                <span class="text-sm font-mono text-[var(--muted-foreground)] bg-[var(--muted)] px-3 py-1 rounded-full w-fit">
                  {{job.duration}}
                </span>
              </div>
              
              <div class="flex items-center gap-2 mb-4 text-[var(--muted-foreground)]">
                <span class="font-medium text-[var(--foreground)]">{{job.company}}</span>
                <span class="w-1 h-1 rounded-full bg-[var(--border)]"></span>
                <span class="text-sm">{{job.location}}</span>
              </div>
              
              <ul class="space-y-3 text-sm md:text-base text-[var(--muted-foreground)] mb-6">
                @for (highlight of job.highlights; track highlight) {
                  <li class="flex items-start gap-3">
                    <mat-icon class="text-[var(--primary)] text-sm shrink-0 mt-0.5" style="font-size: 16px; width: 16px; height: 16px;">chevron_right</mat-icon>
                    <span>{{highlight}}</span>
                  </li>
                }
              </ul>

              <div class="flex flex-wrap gap-2">
                @for (tech of job.technologies; track tech) {
                  <span class="px-2.5 py-1 rounded-md bg-[var(--card)] border border-[var(--border)] text-[11px] font-mono text-[var(--foreground)]">
                    {{tech}}
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
export class ExperienceComponent implements AfterViewInit {
  portfolio = portfolioData;

  constructor(private el: ElementRef) {}
  platformId = inject(PLATFORM_ID);

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const header = this.el.nativeElement.querySelector('.exp-header');
      const items = this.el.nativeElement.querySelectorAll('.exp-item');
      
      inView(this.el.nativeElement, () => {
        animate(header, { opacity: [0, 1], y: [20, 0] }, { duration: 0.6, ease: "easeOut" });
        animate(items, { opacity: [0, 1], x: [-20, 0] }, { delay: stagger(0.2), duration: 0.8, ease: "easeOut" });
      });
    }
  }
}
