import { Resend } from 'resend';
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const form = formidable({ maxFileSize: 40 * 1024 * 1024 });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(500).json({ error: 'Form parsing error: ' + err.message });
    }

    try {
      const resend = new Resend(process.env.RESEND_API_KEY);

      // Build email content from form fields
      let htmlContent = '<h2>New Application Submission</h2><table border="1" cellpadding="8" style="border-collapse:collapse;width:100%">';
      
      for (const [key, value] of Object.entries(fields)) {
        const fieldValue = Array.isArray(value) ? value.join(', ') : value;
        if (fieldValue) {
          htmlContent += `<tr><td style="background:#f5f5f5;font-weight:bold;width:30%">${key}</td><td>${fieldValue}</td></tr>`;
        }
      }
      htmlContent += '</table>';

      // Handle file attachments
      const attachments = [];
      
      if (files.headshot) {
        const file = Array.isArray(files.headshot) ? files.headshot[0] : files.headshot;
        if (file && file.size > 0) {
          const fileData = fs.readFileSync(file.filepath);
          attachments.push({
            filename: file.originalFilename || 'headshot.jpg',
            content: fileData,
          });
        }
      }

      if (files.resume) {
        const file = Array.isArray(files.resume) ? files.resume[0] : files.resume;
        if (file && file.size > 0) {
          const fileData = fs.readFileSync(file.filepath);
          attachments.push({
            filename: file.originalFilename || 'resume.pdf',
            content: fileData,
          });
        }
      }

      await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'altdreamstar@gmail.com',
        subject: 'New Application - ALT Hollywood Dream Star',
        html: htmlContent,
        attachments: attachments,
      });

      return res.status(200).json({ success: true });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });
}
