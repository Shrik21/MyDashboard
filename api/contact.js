module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email, subject, message } = req.body || {};

  if (!process.env.RESEND_API_KEY) {
    console.warn('RESEND_API_KEY is not set. Simulating email send.');
    return res.status(200).json({ success: true, message: 'Email simulated' });
  }

  try {
    const { Resend } = await import('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'shreyanshkind232@gmail.com',
      subject: `New Contact Form Submission: ${subject || 'Portfolio Contact'}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name || ''}</p>
        <p><strong>Email:</strong> ${email || ''}</p>
        <p><strong>Subject:</strong> ${subject || ''}</p>
        <p><strong>Message:</strong></p>
        <p>${message || ''}</p>
      `,
    });

    try {
      await resend.emails.send({
        from: 'Shreyansh Kumar <onboarding@resend.dev>',
        to: email,
        subject: 'Thank you for reaching out!',
        html: `
          <p>Hi ${name || 'there'},</p>
          <p>Thank you for reaching out to me regarding "${subject || 'your message'}". I have received your message and will get back to you as soon as possible.</p>
          <p>Best regards,<br>Shreyansh Kumar</p>
        `,
      });
    } catch (error) {
      console.warn(
        'Could not send confirmation email to user. Note: Resend free tier only allows sending to verified email addresses.',
        error,
      );
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
};
