import express from 'express';
import cors from 'cors';
import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';
import nodemailer from 'nodemailer';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' })); // Increased limit for base64 images/pdfs
app.use(express.urlencoded({ limit: '50mb', extended: true }));

let db: Database;

// Initialize SQLite Database
async function initDB() {
  db = await open({
    filename: './database.sqlite',
    driver: sqlite3.Database
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS applications (
      id TEXT PRIMARY KEY,
      englishName TEXT,
      chineseName TEXT,
      gender TEXT,
      dob TEXT,
      country TEXT,
      height TEXT,
      weight TEXT,
      race TEXT,
      idNumber TEXT,
      address TEXT,
      guardianMobile TEXT,
      englishLevel TEXT,
      hobbies TEXT,
      resume TEXT,
      submittedAt TEXT,
      headshotUrl TEXT,
      resumeFileUrl TEXT,
      resumeFileName TEXT,
      videoFileUrl TEXT,
      videoFileName TEXT
    )
  `);
  console.log('SQLite Database initialized.');
}

// Email Transporter Configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USER || 'altdreamstar@gmail.com',
    pass: process.env.SMTP_PASS || ''
  }
});

// --- API ROUTES ---

// Get all applications
app.get('/api/applications', async (req, res) => {
  try {
    const apps = await db.all('SELECT * FROM applications ORDER BY submittedAt DESC');
    res.json(apps);
  } catch (error) {
    console.error('Error fetching applications:', error);
    res.status(500).json({ error: 'Failed to fetch applications' });
  }
});

// Submit a new application
app.post('/api/applications', async (req, res) => {
  const appData = req.body;
  const id = appData.id || \`app-\${Date.now()}\`;
  const submittedAt = appData.submittedAt || new Date().toISOString().split('T')[0];

  try {
    // 1. Save to SQLite Database
    await db.run(\`
      INSERT INTO applications (
        id, englishName, chineseName, gender, dob, country, height, weight, race, 
        idNumber, address, guardianMobile, englishLevel, hobbies, resume, 
        submittedAt, headshotUrl, resumeFileUrl, resumeFileName, videoFileUrl, videoFileName
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    \`, [
      id, appData.englishName, appData.chineseName, appData.gender, appData.dob, 
      appData.country, appData.height, appData.weight, appData.race, appData.idNumber, 
      appData.address, appData.guardianMobile, appData.englishLevel, appData.hobbies, 
      appData.resume, submittedAt, appData.headshotUrl, appData.resumeFileUrl, 
      appData.resumeFileName, appData.videoFileUrl, appData.videoFileName
    ]);

    console.log(\`Application \${id} saved to database.\`);

    // 2. Send Email Notification (if SMTP_PASS is configured)
    if (process.env.SMTP_PASS) {
      const mailOptions = {
        from: process.env.SMTP_USER || 'altdreamstar@gmail.com',
        to: 'altdreamstar@gmail.com', // Send to yourself
        subject: \`New Application Received: \${appData.englishName}\`,
        html: \`
          <h2>New Application from \${appData.englishName}</h2>
          <p><strong>Chinese Name:</strong> \${appData.chineseName || 'N/A'}</p>
          <p><strong>Gender:</strong> \${appData.gender}</p>
          <p><strong>Date of Birth:</strong> \${appData.dob}</p>
          <p><strong>Country:</strong> \${appData.country}</p>
          <p><strong>Mobile:</strong> \${appData.guardianMobile}</p>
          <p><strong>Address:</strong> \${appData.address}</p>
          <hr/>
          <p><em>Please log in to the Internal Dashboard to view the full application, headshot, and attached files.</em></p>
        \`
      };

      await transporter.sendMail(mailOptions);
      console.log(\`Email notification sent for \${appData.englishName}\`);
    } else {
      console.log('Email not sent: SMTP_PASS is not configured in environment variables.');
    }

    res.status(201).json({ success: true, id });
  } catch (error) {
    console.error('Error saving application:', error);
    res.status(500).json({ error: 'Failed to save application' });
  }
});

// Delete an application
app.delete('/api/applications/:id', async (req, res) => {
  try {
    await db.run('DELETE FROM applications WHERE id = ?', [req.params.id]);
    res.json({ success: true });
  } catch (error) {
    console.error('Error deleting application:', error);
    res.status(500).json({ error: 'Failed to delete application' });
  }
});

// --- SERVER SETUP ---
async function startServer() {
  await initDB();

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Production static file serving
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(\`Server running on http://localhost:\${PORT}\`);
  });
}

startServer();
