// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  passwordHash: { type: String, required: true },
  role: { type: String, enum: ['client','promoter','admin'], default: 'client' },
  company: { type: String },
  description: { type: String },
  createdAt: { type: Date, default: Date.now }
}, { toJSON: { virtuals: true } });

module.exports = mongoose.model('User', userSchema);
