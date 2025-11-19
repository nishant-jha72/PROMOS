// Promos/backend/server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors({ origin: 'https://vercel.com/nishant-jhas-projects-54810ab6/promos/4eJGNJkQEk5iHvYhEEgj2WQ1DFhU' }));


// routes (keep file paths same as in project)
const authRoutes = require('./routes/auth');
const promoRoutes = require('./routes/promos');

const app = express();           // <-- create app BEFORE connecting to Mongo
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/promos', promoRoutes);

const PORT = process.env.PORT || 5000;
const MONGO = process.env.MONGO_URI || '';

console.log('Using MONGO_URI (masked):', MONGO ? MONGO.replace(/(mongodb.*?:\/\/)(.*@)?/, '$1***@') : '(empty)');

if (!MONGO.startsWith('mongodb://') && !MONGO.startsWith('mongodb+srv://')) {
  console.error('ERROR: MONGO_URI must start with "mongodb://" or "mongodb+srv://". Fix backend/.env');
  process.exit(1);
}

mongoose.set('strictQuery', false);
mongoose.connect(MONGO, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 10000
})
  .then(() => {
    console.log('MongoDB connected');
    // Only now start the express server, app is defined above
    app.listen(PORT, () => console.log('Server running on port', PORT));
  })
  .catch(err => {
    console.error('MongoDB connection error:', err && err.message ? err.message : err);
    process.exit(1);
  });

// Optional: basic root route to verify server
app.get('/', (req, res) => res.send('Promos API is running'));
