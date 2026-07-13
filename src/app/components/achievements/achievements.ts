import { Component, ElementRef, AfterViewInit, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { portfolioData } from '../../data/portfolio';
import { MatIconModule } from '@angular/material/icon';
import { animate, inView, stagger } from 'motion';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <section id="achievements" class="py-20 border-t border-[var(--border)] relative">
      <div class="max-w-4xl ach-container">
        
        <div class="flex items-center gap-4 mb-12 ach-header opacity-0">
          <h2 class="text-3xl font-display font-bold tracking-tight text-[var(--foreground)]">Awards & Impact</h2>
          <div class="h-px bg-[var(--border)] flex-grow"></div>
        </div>

        <div class="grid md:grid-cols-2 gap-6 mb-12">
          <!-- Animated Stats -->
          <div class="p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)] flex flex-col justify-center ach-item opacity-0">
            <mat-icon class="text-[var(--primary)] mb-4" style="font-size: 32px; width: 32px; height: 32px;">verified</mat-icon>
            <div class="text-4xl font-display font-bold text-[var(--foreground)] mb-2">12+</div>
            <div class="text-sm font-mono text-[var(--muted-foreground)]">Microservices Deployed</div>
          </div>
          <div class="p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)] flex flex-col justify-center ach-item opacity-0">
            <mat-icon class="text-[var(--primary)] mb-4" style="font-size: 32px; width: 32px; height: 32px;">trending_down</mat-icon>
            <div class="text-4xl font-display font-bold text-[var(--foreground)] mb-2">40%</div>
            <div class="text-sm font-mono text-[var(--muted-foreground)]">Reduction in API Latency</div>
          </div>
          <div class="p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)] flex flex-col justify-center ach-item opacity-0">
            <mat-icon class="text-[var(--primary)] mb-4" style="font-size: 32px; width: 32px; height: 32px;">speed</mat-icon>
            <div class="text-4xl font-display font-bold text-[var(--foreground)] mb-2">99.9%</div>
            <div class="text-sm font-mono text-[var(--muted-foreground)]">System Uptime Achieved</div>
          </div>
          <div class="p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)] flex flex-col justify-center ach-item opacity-0">
            <mat-icon class="text-[var(--primary)] mb-4" style="font-size: 32px; width: 32px; height: 32px;">bug_report</mat-icon>
            <div class="text-4xl font-display font-bold text-[var(--foreground)] mb-2">5</div>
            <div class="text-sm font-mono text-[var(--muted-foreground)]">Critical Defects Post-Release</div>
          </div>
        </div>

        <div class="space-y-6">
          @for (award of portfolio.awards; track award.title) {
            <div class="p-8 rounded-3xl bg-[var(--card)] border border-[var(--border)] ach-item opacity-0 relative overflow-hidden">
              <div class="absolute -right-6 -top-6 text-[var(--muted)]/30">
                <mat-icon style="font-size: 150px; width: 150px; height: 150px;">emoji_events</mat-icon>
              </div>
              
              <div class="relative z-10">
                <div class="flex items-center gap-3 mb-4">
                  <div class="p-2 bg-yellow-500/20 text-yellow-500 rounded-lg">
                    <mat-icon>star</mat-icon>
                  </div>
                  <div>
                    <h3 class="text-xl font-bold text-[var(--foreground)]">{{award.title}}</h3>
                    <p class="text-sm font-mono text-[var(--muted-foreground)]">{{award.issuer}} • {{award.year}}</p>
                  </div>
                </div>
                <p class="text-[var(--foreground)] font-medium max-w-2xl leading-relaxed">
                  {{award.description}}
                </p>
              </div>
            </div>
          }
        </div>

      </div>
    </section>
  `
})
export class AchievementsComponent implements AfterViewInit {
  portfolio = portfolioData;

  constructor(private el: ElementRef) {}
  platformId = inject(PLATFORM_ID);

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const header = this.el.nativeElement.querySelector('.ach-header');
      const items = this.el.nativeElement.querySelectorAll('.ach-item');
      
      inView(this.el.nativeElement, () => {
        animate(header, { opacity: [0, 1], y: [20, 0] }, { duration: 0.6, ease: "easeOut" });
        animate(items, { opacity: [0, 1], y: [20, 0] }, { delay: stagger(0.15), duration: 0.8, ease: "easeOut" });
      });
    }
  }
}
