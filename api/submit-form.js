import { Resend } from 'resend';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    const chunks = [];
    for await (const chunk of req) {
      chunks.push(chunk);
    }
    const buffer = Buffer.concat(chunks);
    
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'altdreamstar@gmail.com',
      subject: 'New Application Submission',
      html: '<p>New application received. Please check attached files.</p>',
      attachments: [],
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
