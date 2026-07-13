import { Component, ElementRef, AfterViewInit, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { portfolioData } from '../../data/portfolio';
import { MatIconModule } from '@angular/material/icon';
import { animate, inView } from 'motion';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatIconModule, ReactiveFormsModule],
  template: `
    <section id="contact" class="py-20 border-t border-[var(--border)] relative">
      <div class="max-w-4xl mx-auto contact-container opacity-0">
        
        <div class="text-center mb-12">
          <div class="inline-flex items-center justify-center p-3 rounded-2xl bg-[var(--primary)]/10 text-[var(--primary)] mb-6">
            <mat-icon style="font-size: 32px; width: 32px; height: 32px;">waving_hand</mat-icon>
          </div>
          <h2 class="text-4xl font-display font-bold tracking-tight text-[var(--foreground)] mb-4">Let's Build Something Great.</h2>
          <p class="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
            Currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div class="grid md:grid-cols-[1fr_2fr] gap-12 bg-[var(--card)] border border-[var(--border)] rounded-3xl p-8 shadow-sm">
          
          <!-- Contact Info -->
          <div class="space-y-8">
            <div>
              <h3 class="text-xl font-bold text-[var(--foreground)] mb-6">Connect 1:1</h3>
              <div class="space-y-4">
                <a [href]="'https://mail.google.com/mail/?view=cm&fs=1&to=' + portfolio.personal.email" target="_blank" class="flex items-center gap-4 text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors group">
                  <div class="p-3 rounded-xl bg-[var(--muted)] group-hover:bg-[var(--primary)]/10 transition-colors">
                    <mat-icon>email</mat-icon>
                  </div>
                  <span class="font-medium">{{portfolio.personal.email}}</span>
                </a>
                <a [href]="'https://' + portfolio.personal.linkedin" target="_blank" class="flex items-center gap-4 text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors group">
                  <div class="p-3 rounded-xl bg-[var(--muted)] group-hover:bg-[var(--primary)]/10 transition-colors">
                    <mat-icon>work</mat-icon>
                  </div>
                  <span class="font-medium">LinkedIn Profile</span>
                </a>
                <a [href]="'https://' + portfolio.personal.github" target="_blank" class="flex items-center gap-4 text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors group">
                  <div class="p-3 rounded-xl bg-[var(--muted)] group-hover:bg-[var(--primary)]/10 transition-colors">
                    <mat-icon>code</mat-icon>
                  </div>
                  <span class="font-medium">GitHub Profile</span>
                </a>
              </div>
            </div>
            
            <div class="pt-8 border-t border-[var(--border)]">
              <p class="text-sm text-[var(--muted-foreground)] mb-4">Location</p>
              <div class="flex items-center gap-2 text-[var(--foreground)] font-medium">
                <mat-icon class="text-[var(--primary)]">location_on</mat-icon>
                {{portfolio.personal.location}}
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-4">
            <div class="grid grid-cols-2 gap-4">
              <div class="space-y-2">
                <label class="text-sm font-medium text-[var(--foreground)]">Full Name</label>
                <input type="text" formControlName="name" class="w-full px-4 py-3 rounded-xl bg-[var(--muted)] border border-transparent focus:border-[var(--primary)] focus:bg-[var(--card)] outline-none transition-colors text-[var(--foreground)]" placeholder="John Doe">
              </div>
              <div class="space-y-2">
                <label class="text-sm font-medium text-[var(--foreground)]">Email Address</label>
                <input type="email" formControlName="email" class="w-full px-4 py-3 rounded-xl bg-[var(--muted)] border border-transparent focus:border-[var(--primary)] focus:bg-[var(--card)] outline-none transition-colors text-[var(--foreground)]" placeholder="john@company.com">
              </div>
            </div>
            <div class="space-y-2">
              <label class="text-sm font-medium text-[var(--foreground)]">Subject</label>
              <input type="text" formControlName="subject" class="w-full px-4 py-3 rounded-xl bg-[var(--muted)] border border-transparent focus:border-[var(--primary)] focus:bg-[var(--card)] outline-none transition-colors text-[var(--foreground)]" placeholder="Opportunity / Networking">
            </div>
            <div class="space-y-2">
              <label class="text-sm font-medium text-[var(--foreground)]">Message</label>
              <textarea formControlName="message" rows="4" class="w-full px-4 py-3 rounded-xl bg-[var(--muted)] border border-transparent focus:border-[var(--primary)] focus:bg-[var(--card)] outline-none transition-colors text-[var(--foreground)] resize-none" placeholder="How can we collaborate?"></textarea>
            </div>
            <button type="submit" [disabled]="contactForm.invalid || isSubmitting" class="w-full py-4 rounded-xl bg-[var(--primary)] text-white font-bold tracking-wide hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
              @if (isSubmitting) {
                <mat-icon class="animate-spin">autorenew</mat-icon>
                Sending...
              } @else if (isSuccess) {
                <mat-icon>check_circle</mat-icon>
                Message Sent!
              } @else {
                <mat-icon>send</mat-icon>
                Send Message
              }
            </button>
          </form>

        </div>
      </div>
    </section>
  `
})
export class ContactComponent implements AfterViewInit {
  portfolio = portfolioData;
  contactForm: FormGroup;
  isSubmitting = false;
  isSuccess = false;
  platformId = inject(PLATFORM_ID);

  constructor(private el: ElementRef, private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const container = this.el.nativeElement.querySelector('.contact-container');
      inView(this.el.nativeElement, () => {
        animate(container, { opacity: [0, 1], y: [40, 0] }, { duration: 0.8, ease: "easeOut" });
      });
    }
  }

  async onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.contactForm.value)
        });
        
        if (response.ok) {
          this.isSuccess = true;
          this.contactForm.reset();
        } else {
          console.error('Failed to send message');
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        this.isSubmitting = false;
        
        // Reset success message after 3 seconds
        if (this.isSuccess) {
          setTimeout(() => {
            this.isSuccess = false;
          }, 3000);
        }
      }
    }
  }
}
