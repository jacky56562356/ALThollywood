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
      const { childFirstName, childLastName, age, gender, parentName, phone, email, experience } = req.body;

      const userEmail = process.env.GMAIL_USER;
      const appPassword = process.env.GMAIL_APP_PASSWORD;

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

      const mailOptions = {
        from: `"ALT Hollywood Dream Star" <${userEmail}>`,
        to: userEmail, // Send to yourself
        subject: `New Summer Camp Application: ${childFirstName} ${childLastName}`,
        html: `
          <h2>New Summer Camp Application Received</h2>
          <p><strong>Student Name:</strong> ${childFirstName} ${childLastName}</p>
          <p><strong>Age:</strong> ${age}</p>
          <p><strong>Gender:</strong> ${gender}</p>
          <p><strong>Experience Level:</strong> ${experience}</p>
          <hr />
          <h3>Parent/Guardian Information</h3>
          <p><strong>Name:</strong> ${parentName}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
        `,
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
