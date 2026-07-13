# Portfolio Dashboard

A modern, responsive personal portfolio website built with Angular 21, Tailwind CSS, and Angular SSR. It showcases Shreyansh Kumar’s experience, projects, skills, achievements, and contact details in a polished single-page experience.

## Features

- Responsive portfolio layout with a desktop sidebar and mobile-friendly navigation
- Sections for hero, about, experience, skills, projects, achievements, and contact
- Dynamic theme support with a lightweight theme service
- Contact form integration powered by a serverless API endpoint
- Server-side rendering support for better performance and SEO

## Tech Stack

- Angular 21
- TypeScript
- Tailwind CSS
- Angular SSR
- Express
- Resend for contact email delivery

## Project Structure

- src/app/components — reusable UI sections for the portfolio
- src/app/data/portfolio.ts — portfolio content and personal information
- src/app/services/theme.service.ts — theme switching logic
- api/contact.ts — contact form API handler

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

The app will be available at http://localhost:3000.

### Build for production

```bash
npm run build
```

### Contact form setup

To enable email delivery from the contact form, set the following environment variable:

```bash
RESEND_API_KEY=your_api_key_here
```

## Notes

This project is designed as a personal portfolio and can be easily customized by editing the content in [src/app/data/portfolio.ts](src/app/data/portfolio.ts).
