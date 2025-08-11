import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import { Buffer } from 'node:buffer';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    status: 'online',
    timestamp: new Date().toISOString()
  });
});

app.post('/auth', async (req, res) => {
  const clientId = '71fe6b2b048846ed9f65fa1644408a43';
  const clientSecret = '0cd12e4a469f46a7bcf119324cf2ed71';

  const buffer = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${buffer}`
    },
    body: new URLSearchParams({
      grant_type: 'client_credentials'
    })
  });

  const data = await response.json();

  setTimeout(() => {
    res.json(data);
  }, 3000);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
