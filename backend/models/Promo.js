const mongoose = require('mongoose');

const promoSchema = new mongoose.Schema({
  title: {type: String, required: true},
  description: String,
  promoter: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
  interestedClients: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
}, {timestamps: true});

module.exports = mongoose.model('Promo', promoSchema);
