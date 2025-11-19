// models/Promo.js
const mongoose = require('mongoose');

const promoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  promoter: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  open: { type: Boolean, default: true },
  promotedAt: { type: Date, default: Date.now },
  interestedClients: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

module.exports = mongoose.model('Promo', promoSchema);
