import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import {join} from 'node:path';
import { Resend } from 'resend';

const browserDistFolder = join(import.meta.dirname, '../browser');

const app = express();
app.use(express.json());
const angularApp = new AngularNodeAppEngine();

const resend = new Resend(process.env['RESEND_API_KEY'] || 'dummy');

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;
  
  if (!process.env['RESEND_API_KEY']) {
    console.warn('RESEND_API_KEY is not set. Simulating email send.');
    res.status(200).json({ success: true, message: 'Email simulated' });
    return;
  }

  try {
    // Send to owner
    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'shreyanshkind232@gmail.com',
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    try {
      // Send confirmation to sender
      await resend.emails.send({
        from: 'Shreyansh Kumar <onboarding@resend.dev>', // In production, use your own verified domain
        to: email,
        subject: `Thank you for reaching out!`,
        html: `
          <p>Hi ${name},</p>
          <p>Thank you for reaching out to me regarding "${subject}". I have received your message and will get back to you as soon as possible.</p>
          <p>Best regards,<br>Shreyansh Kumar</p>
        `
      });
    } catch (e) {
      console.warn('Could not send confirmation email to user. Note: Resend free tier only allows sending to verified email addresses.', e);
    }

    res.status(200).json({ success: true });
    return;
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
    return;
  }
});

/**
 * Example Express Rest API endpoints can be defined here.
 * Uncomment and define endpoints as necessary.
 *
 * Example:
 * ```ts
 * app.get('/api/{*splat}', (req, res) => {
 *   // Handle API request
 * });
 * ```
 */

/**
 * Serve static files from /browser
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.use((req, res, next) => {
  angularApp
    .handle(req)
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next(),
    )
    .catch(next);
});

/**
 * Start the server if this module is the main entry point, or it is ran via PM2.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url) || process.env['pm_id']) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, (error) => {
    if (error) {
      throw error;
    }

    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

/**
 * Request handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
 */
export const reqHandler = createNodeRequestHandler(app);
