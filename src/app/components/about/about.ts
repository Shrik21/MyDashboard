import { Component, ElementRef, AfterViewInit, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { portfolioData } from '../../data/portfolio';
import { MatIconModule } from '@angular/material/icon';
import { animate, stagger, inView } from 'motion';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <section id="about" class="py-20 border-t border-[var(--border)]">
      <div class="max-w-4xl about-container">
        
        <div class="flex items-center gap-4 mb-10 about-item opacity-0">
          <div class="h-px bg-[var(--border)] flex-grow"></div>
          <h2 class="text-3xl font-display font-bold tracking-tight text-[var(--foreground)]">About Me</h2>
        </div>

        <div class="grid md:grid-cols-[2fr_1fr] gap-12">
          <div class="space-y-6 text-lg text-[var(--muted-foreground)] leading-relaxed about-item opacity-0">
            <p>
              {{portfolio.personal.summary}}
            </p>
            <p>
              I am passionate about <strong class="text-[var(--foreground)]">Clean Architecture</strong>, driving <strong class="text-[var(--foreground)]">Microservices modernization</strong>, and recently, exploring the frontiers of <strong class="text-[var(--foreground)]">AI-Agent Design</strong> using the Model Context Protocol.
            </p>
            <p>
              My goal is to build robust systems that are not only performant but also intuitive for end-users, ensuring that technical complexity translates into elegant solutions.
            </p>
          </div>
          
          <div class="grid grid-cols-2 gap-4 about-item opacity-0">
            <div class="p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)] flex flex-col items-center justify-center text-center">
              <span class="text-4xl font-display font-bold text-[var(--primary)] mb-2">{{portfolio.personal.yoe}}+</span>
              <span class="text-xs font-mono text-[var(--muted-foreground)]">Years of Experience</span>
            </div>
            <div class="p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)] flex flex-col items-center justify-center text-center">
              <span class="text-4xl font-display font-bold text-[var(--primary)] mb-2">{{portfolio.projects.length}}+</span>
              <span class="text-xs font-mono text-[var(--muted-foreground)]">Major Projects</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  `
})
export class AboutComponent implements AfterViewInit {
  portfolio = portfolioData;

  constructor(private el: ElementRef) {}
  platformId = inject(PLATFORM_ID);

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const items = this.el.nativeElement.querySelectorAll('.about-item');
      inView(this.el.nativeElement, () => {
        animate(items, { opacity: [0, 1], y: [20, 0] }, { delay: stagger(0.15), duration: 0.8, ease: "easeOut" });
      });
    }
  }
}
