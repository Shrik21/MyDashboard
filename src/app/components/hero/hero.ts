import { Component, ElementRef, AfterViewInit, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { portfolioData } from '../../data/portfolio';
import { MatIconModule } from '@angular/material/icon';
import { animate, stagger, inView } from 'motion';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <section id="home" class="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20 md:pt-0">
      <!-- Background Ambient Glows -->
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div class="max-w-4xl relative z-10 hero-container">
        
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--muted)] border border-[var(--border)] text-xs font-mono mb-6 hero-item opacity-0 text-[var(--primary)]">
          <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          Available for new opportunities
        </div>

        <h1 class="text-5xl md:text-7xl font-display font-bold tracking-tight text-[var(--foreground)] mb-4 hero-item opacity-0">
          Hi, I'm <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">{{portfolio.personal.name}}</span>.
        </h1>
        
        <h2 class="text-2xl md:text-4xl font-display font-medium text-[var(--muted-foreground)] mb-6 hero-item opacity-0">
          {{portfolio.personal.title}}
        </h2>
        
        <p class="text-lg md:text-xl text-[var(--muted-foreground)] max-w-2xl mb-10 hero-item opacity-0 leading-relaxed">
          {{portfolio.personal.tagline}}
        </p>
        
        <div class="flex flex-wrap items-center gap-4 hero-item opacity-0">
          <a href="#projects" class="px-6 py-3 rounded-xl bg-[var(--foreground)] text-[var(--background)] font-medium hover:opacity-90 transition-opacity flex items-center gap-2 shadow-lg shadow-[var(--foreground)]/10">
            View Projects
            <mat-icon class="text-sm">arrow_forward</mat-icon>
          </a>
          <a href="#contact" class="px-6 py-3 rounded-xl bg-[var(--card)] text-[var(--foreground)] border border-[var(--border)] font-medium hover:bg-[var(--muted)] transition-colors flex items-center gap-2">
            <mat-icon class="text-sm">forum</mat-icon>
            Connect 1:1
          </a>
        </div>

        <!-- Tech Stack Pills -->
        <div class="mt-16 hero-item opacity-0">
          <p class="text-sm font-mono text-[var(--muted-foreground)] mb-4 uppercase tracking-widest">Core Tech Stack</p>
          <div class="flex flex-wrap gap-2">
            @for (tech of techStack; track tech) {
              <div class="px-3 py-1.5 rounded-md bg-[var(--muted)] border border-[var(--border)] text-xs font-mono text-[var(--foreground)] flex items-center gap-2 hover:-translate-y-1 transition-transform cursor-default">
                {{tech}}
              </div>
            }
          </div>
        </div>

      </div>
    </section>
  `
})
export class HeroComponent implements AfterViewInit {
  portfolio = portfolioData;
  techStack = ['Java', 'Spring Boot', 'Angular', 'Kafka', 'MongoDB', 'AWS', 'Docker', 'Claude API'];

  constructor(private el: ElementRef) {}
  platformId = inject(PLATFORM_ID);

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const items = this.el.nativeElement.querySelectorAll('.hero-item');
      inView(this.el.nativeElement, () => {
        animate(items, { opacity: [0, 1], y: [20, 0] }, { delay: stagger(0.1), duration: 0.8, ease: "easeOut" });
      });
    }
  }
}
