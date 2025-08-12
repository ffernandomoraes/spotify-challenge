import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import { Buffer } from 'node:buffer';
import { API_URL, IDS_TOP_WORLD_ARTISTS } from './data';
import { sleep } from './sleep';

const app = express();
const PORT = process.env.PORT || 3001;
const DELAY = 2000;

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

  const response = await fetch(`https://accounts.spotify.com/api/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${buffer}`
    },
    body: new URLSearchParams({
      grant_type: 'client_credentials'
    })
  });

  await sleep(DELAY);

  const data = await response.json();
  res.status(response.status).json(data);
});

app.get('/artists', async (req, res) => {
  const response = await fetch(`${API_URL}/artists?ids=${IDS_TOP_WORLD_ARTISTS.join(',')}`, {
    method: 'GET',
    headers: {
      Authorization: req.headers.authorization ?? ''
    },
  });

  await sleep(DELAY);

  const data = await response.json();

  res.status(response.status).json(data);
});

app.get('/artists/:id', async (req, res) => {
  try {
    const response = await fetch(`${API_URL}/artists/${req.params.id}`, {
      method: 'GET',
      headers: {
        Authorization: req.headers.authorization ?? ''
      }
    });
  
    await sleep(DELAY);
  
    const data = await response.json();
  
    res.status(response.status).json(data); 
  } catch (error) {
    console.log(error);
  }
});

app.get('/artists/:id/top-tracks', async (req, res) => {
  const response = await fetch(`${API_URL}/artists/${req.params.id}/top-tracks?market=BR`, {
    method: 'GET',
    headers: {
      Authorization: req.headers.authorization ?? ''
    }
  });

  const data = await response.json();

  await sleep(1000);

  res.status(response.status).json(data);
});

app.get('/artists/:id/albums', async (req, res) => {
  const offset = (req.query.offset ?? '0') as string;

  const params = new URLSearchParams({
    market: 'BR',
    include_groups: 'album',
    limit: '8',
    offset
  });

  const response = await fetch(`${API_URL}/artists/${req.params.id}/albums?${params.toString()}`, {
    method: 'GET',
    headers: {
      Authorization: req.headers.authorization ?? ''
    }
  });

  const data = await response.json();

  await sleep(1000);

  res.status(response.status).json(data);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
