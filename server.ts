import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware to parse JSON bodies
  app.use(express.json());

  // API routes FIRST
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  app.post("/api/submit-application", async (req, res) => {
    try {
      const data = req.body;

      const userEmail = process.env.GMAIL_USER || "altdreamstar@gmail.com";
      const appPassword = process.env.GMAIL_APP_PASSWORD || "bhfi rvko awil tltn";

      if (!userEmail || !appPassword) {
        return res.status(500).json({ error: "Email configuration is missing on the server." });
      }

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: userEmail,
          pass: appPassword,
        },
      });

      // Format all form data into an HTML table
      let htmlContent = `
        <div style="font-family: sans-serif; max-width: 800px; margin: 0 auto;">
          <h2 style="color: #C9A84C; background: #111; padding: 15px; text-align: center;">New Summer Camp Application 2026</h2>
          <table border="1" cellpadding="10" style="border-collapse: collapse; width: 100%; border-color: #ddd;">
            <tr style="background: #f8f8f8;">
              <th style="width: 35%; text-align: left;">Field</th>
              <th style="text-align: left;">Value</th>
            </tr>
      `;

      for (const [key, value] of Object.entries(data)) {
        // Skip empty values to keep email clean
        if (!value) continue;
        
        // Format key to be more readable (e.g., studentNameZh -> Student Name Zh)
        const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
        
        htmlContent += `
            <tr>
              <td style="font-weight: bold; color: #333;">${formattedKey}</td>
              <td style="color: #555; white-space: pre-wrap;">${value}</td>
            </tr>
        `;
      }

      htmlContent += `
          </table>
          <p style="text-align: center; color: #888; font-size: 12px; margin-top: 20px;">ALT Hollywood Dream Star System</p>
        </div>
      `;

      const studentName = data.studentNameZh || data.studentNameEn || data.childFirstName || 'New Student';

      const mailOptions = {
        from: `"ALT Hollywood Dream Star" <${userEmail}>`,
        to: userEmail, // Send to yourself
        subject: `New Summer Camp Application: ${studentName}`,
        html: htmlContent,
      };

      await transporter.sendMail(mailOptions);
      res.json({ success: true, message: "Application submitted successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send application" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*all', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
