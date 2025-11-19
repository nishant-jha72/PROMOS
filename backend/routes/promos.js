const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Promo = require('../models/Promo');
const User = require('../models/User');

// Create promo - only promoters
router.post('/', auth, async (req, res) => {
  try{
    const {title, description} = req.body;
    const userId = req.user.id;
    const user = await User.findById(userId);
    if(user.role !== 'promoter') return res.status(403).json({msg:'Only promoters can create promos'});
    const promo = new Promo({title, description, promoter: userId});
    await promo.save();
    res.json(promo);
  }catch(err){ console.error(err); res.status(500).send('Server error'); }
});

// List all promos
router.get('/', auth, async (req, res) => {
  try{
    const promos = await Promo.find().populate('promoter','name email');
    res.json(promos);
  }catch(err){ console.error(err); res.status(500).send('Server error'); }
});

// Express interest - clients can express interest
router.post('/:id/interest', auth, async (req, res) => {
  try{
    const userId = req.user.id;
    const user = await User.findById(userId);
    if(user.role !== 'client') return res.status(403).json({msg:'Only clients can express interest'});
    const promo = await Promo.findById(req.params.id);
    if(!promo) return res.status(404).json({msg:'Promo not found'});
    if(promo.interestedClients.includes(userId)) return res.status(400).json({msg:'Already interested'});
    promo.interestedClients.push(userId);
    await promo.save();
    res.json(promo);
  }catch(err){ console.error(err); res.status(500).send('Server error'); }
});

module.exports = router;
