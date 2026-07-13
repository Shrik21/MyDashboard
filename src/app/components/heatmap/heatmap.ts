import { Component, ElementRef, AfterViewInit, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { animate, inView } from 'motion';

@Component({
  selector: 'app-heatmap',
  standalone: true,
  template: `
    <section class="py-20 border-t border-[var(--border)]">
      <div class="max-w-4xl heatmap-container">
        
        <div class="flex items-center gap-4 mb-8 heatmap-header opacity-0">
          <div class="h-px bg-[var(--border)] flex-grow"></div>
          <h2 class="text-3xl font-display font-bold tracking-tight text-[var(--foreground)]">Activity Map</h2>
        </div>

        <div class="p-8 rounded-3xl bg-[var(--card)] border border-[var(--border)] overflow-x-auto heatmap-item opacity-0">
          <div class="flex flex-col gap-2 min-w-max">
            <!-- Simulated Heatmap Grid -->
            <div class="flex gap-2 text-xs font-mono text-[var(--muted-foreground)] mb-2">
              <div class="w-8"></div>
              <div class="flex-1 flex justify-between">
                <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
              </div>
            </div>
            
            <div class="flex gap-2 items-center">
              <span class="text-xs font-mono text-[var(--muted-foreground)] w-8 text-right pr-2">Mon</span>
              <div class="flex gap-[3px] flex-1">
                @for (cell of row1; track $index) {
                  <div class="w-[12px] h-[12px] rounded-sm" [class]="getHeatColor(cell)"></div>
                }
              </div>
            </div>
            <div class="flex gap-2 items-center">
              <span class="text-xs font-mono text-[var(--muted-foreground)] w-8"></span>
              <div class="flex gap-[3px] flex-1">
                @for (cell of row2; track $index) {
                  <div class="w-[12px] h-[12px] rounded-sm" [class]="getHeatColor(cell)"></div>
                }
              </div>
            </div>
            <div class="flex gap-2 items-center">
              <span class="text-xs font-mono text-[var(--muted-foreground)] w-8 text-right pr-2">Wed</span>
              <div class="flex gap-[3px] flex-1">
                @for (cell of row3; track $index) {
                  <div class="w-[12px] h-[12px] rounded-sm" [class]="getHeatColor(cell)"></div>
                }
              </div>
            </div>
            <div class="flex gap-2 items-center">
              <span class="text-xs font-mono text-[var(--muted-foreground)] w-8"></span>
              <div class="flex gap-[3px] flex-1">
                @for (cell of row4; track $index) {
                  <div class="w-[12px] h-[12px] rounded-sm" [class]="getHeatColor(cell)"></div>
                }
              </div>
            </div>
            <div class="flex gap-2 items-center">
              <span class="text-xs font-mono text-[var(--muted-foreground)] w-8 text-right pr-2">Fri</span>
              <div class="flex gap-[3px] flex-1">
                @for (cell of row5; track $index) {
                  <div class="w-[12px] h-[12px] rounded-sm" [class]="getHeatColor(cell)"></div>
                }
              </div>
            </div>
            
            <div class="flex justify-end items-center gap-2 mt-4 text-xs font-mono text-[var(--muted-foreground)]">
              <span>Less</span>
              <div class="w-[12px] h-[12px] rounded-sm bg-[var(--muted)]"></div>
              <div class="w-[12px] h-[12px] rounded-sm bg-blue-500/30"></div>
              <div class="w-[12px] h-[12px] rounded-sm bg-blue-500/60"></div>
              <div class="w-[12px] h-[12px] rounded-sm bg-blue-500/80"></div>
              <div class="w-[12px] h-[12px] rounded-sm bg-blue-500"></div>
              <span>More</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  `
})
export class HeatmapComponent implements AfterViewInit {
  // Generate random data for 52 weeks
  row1 = Array.from({length: 52}, () => Math.floor(Math.random() * 5));
  row2 = Array.from({length: 52}, () => Math.floor(Math.random() * 5));
  row3 = Array.from({length: 52}, () => Math.floor(Math.random() * 5));
  row4 = Array.from({length: 52}, () => Math.floor(Math.random() * 5));
  row5 = Array.from({length: 52}, () => Math.floor(Math.random() * 5));

  getHeatColor(value: number): string {
    switch(value) {
      case 0: return 'bg-[var(--muted)] hover:ring-1 hover:ring-[var(--foreground)]';
      case 1: return 'bg-blue-500/30 hover:ring-1 hover:ring-[var(--foreground)]';
      case 2: return 'bg-blue-500/60 hover:ring-1 hover:ring-[var(--foreground)]';
      case 3: return 'bg-blue-500/80 hover:ring-1 hover:ring-[var(--foreground)]';
      case 4: return 'bg-blue-500 hover:ring-1 hover:ring-[var(--foreground)]';
      default: return 'bg-[var(--muted)]';
    }
  }

  constructor(private el: ElementRef) {}
  platformId = inject(PLATFORM_ID);

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const header = this.el.nativeElement.querySelector('.heatmap-header');
      const item = this.el.nativeElement.querySelector('.heatmap-item');
      
      inView(this.el.nativeElement, () => {
        animate(header, { opacity: [0, 1], y: [20, 0] }, { duration: 0.6, ease: "easeOut" });
        animate(item, { opacity: [0, 1], scale: [0.98, 1] }, { delay: 0.2, duration: 0.6, ease: "easeOut" });
      });
    }
  }
}
