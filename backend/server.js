// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

// routes
const authRoutes = require('./routes/auth');
const promosRoutes = require('./routes/promos');
const usersRoutes = require('./routes/users'); // users (promoters/clients)

const app = express();
app.use(express.json());

// CORS: allow origins provided in ALLOWED_ORIGINS env var (comma separated), or allow all if not set (dev)
const allowed = process.env.ALLOWED_ORIGINS;
if (allowed) {
  const origins = allowed.split(',').map(s => s.trim());
  app.use(cors({ origin: origins }));
  console.log('CORS origins:', origins);
} else {
  app.use(cors());
  console.log('CORS: allowing all origins (set ALLOWED_ORIGINS in production)');
}

// mount routes under /api
app.use('/api/auth', authRoutes);
app.use('/api/promos', promosRoutes);
app.use('/api/users', usersRoutes);

// basic root route
app.get('/api', (req, res) => res.json({ ok: true, message: 'Promos API' }));

// production static (optional) — if you ever serve frontend from backend
if (process.env.NODE_ENV === 'production') {
  const buildPath = path.join(__dirname, '..', 'frontend', 'build');
  app.use(express.static(buildPath));
  app.get('*', (req, res) => res.sendFile(path.join(buildPath, 'index.html')));
}

// connect to Mongo and start server
const PORT = process.env.PORT || 5000;
const MONGO = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/promosdb';

mongoose.set('strictQuery', false);

mongoose.connect(MONGO, { useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS: 10000 })
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => {
    console.error('MongoDB connection error:', err && err.message ? err.message : err);
    process.exit(1);
  });
