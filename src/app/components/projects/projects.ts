import { Component, ElementRef, AfterViewInit, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { portfolioData } from '../../data/portfolio';
import { MatIconModule } from '@angular/material/icon';
import { animate, stagger, inView } from 'motion';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <section id="projects" class="py-20 border-t border-[var(--border)] relative">
      <div class="max-w-5xl proj-container">
        
        <div class="flex items-center gap-4 mb-12 proj-header opacity-0">
          <div class="h-px bg-[var(--border)] flex-grow"></div>
          <h2 class="text-3xl font-display font-bold tracking-tight text-[var(--foreground)]">Featured Projects</h2>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          @for (project of portfolio.projects; track project.name) {
            <div class="group relative flex flex-col justify-between p-8 rounded-3xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--primary)] transition-colors overflow-hidden proj-item opacity-0 shadow-sm hover:shadow-lg">
              <!-- Glow effect on hover -->
              <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur opacity-0 group-hover:opacity-10 transition duration-500"></div>
              
              <div class="relative z-10">
                <div class="flex justify-between items-start mb-6">
                  <div>
                    <h3 class="text-2xl font-bold text-[var(--foreground)] mb-1 group-hover:text-[var(--primary)] transition-colors">{{project.name}}</h3>
                    <p class="text-sm font-mono text-[var(--muted-foreground)]">{{project.company}}</p>
                  </div>
                  <a href="#" class="p-2 rounded-full bg-[var(--muted)] hover:bg-[var(--primary)] hover:text-white transition-colors">
                    <mat-icon style="font-size: 20px; width: 20px; height: 20px;">open_in_new</mat-icon>
                  </a>
                </div>
                
                <p class="text-[var(--foreground)] mb-6 font-medium">
                  {{project.description}}
                </p>

                <ul class="space-y-2 text-sm text-[var(--muted-foreground)] mb-8">
                  @for (highlight of project.highlights; track highlight) {
                    <li class="flex items-start gap-2">
                      <mat-icon class="text-[var(--primary)] text-sm shrink-0" style="font-size: 16px; width: 16px; height: 16px;">task_alt</mat-icon>
                      <span>{{highlight}}</span>
                    </li>
                  }
                </ul>
              </div>

              <div class="relative z-10 flex flex-wrap gap-2 mt-auto pt-6 border-t border-[var(--border)] group-hover:border-[var(--primary)]/20 transition-colors">
                @for (tech of project.technologies; track tech) {
                  <span class="px-3 py-1 rounded-full bg-[var(--muted)] text-[12px] font-mono text-[var(--foreground)]">
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
export class ProjectsComponent implements AfterViewInit {
  portfolio = portfolioData;

  constructor(private el: ElementRef) {}
  platformId = inject(PLATFORM_ID);

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const header = this.el.nativeElement.querySelector('.proj-header');
      const items = this.el.nativeElement.querySelectorAll('.proj-item');
      
      inView(this.el.nativeElement, () => {
        animate(header, { opacity: [0, 1], y: [20, 0] }, { duration: 0.6, ease: "easeOut" });
        animate(items, { opacity: [0, 1], y: [30, 0] }, { delay: stagger(0.15), duration: 0.8, ease: "easeOut" });
      });
    }
  }
}
