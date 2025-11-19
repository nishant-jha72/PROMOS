// routes/promos.js
const express = require('express');
const Promo = require('../models/Promo');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'changeme';

// helper: simple auth middleware
function auth(req, res, next) {
  const h = req.headers.authorization;
  if (!h) return res.status(401).json({ msg: 'No token' });
  const token = h.split(' ')[1];
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.userId = data.id;
    req.userRole = data.role;
    next();
  } catch (err) {
    return res.status(401).json({ msg: 'Invalid token' });
  }
}

// GET all promos
router.get('/', async (req, res) => {
  try {
    const promos = await Promo.find().populate('promoter', 'name company');
    res.json(promos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
});

// POST create promo (promoter only)
router.post('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) return res.status(401).json({ msg: 'Invalid user' });
    if (user.role !== 'promoter') return res.status(403).json({ msg: 'Only promoters can create promos' });

    const { title, description } = req.body;
    const promo = new Promo({ title, description, promoter: user._id });
    await promo.save();
    res.json(promo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
});

// POST express interest (client)
router.post('/:id/interest', auth, async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) return res.status(401).json({ msg: 'Invalid user' });

    const promo = await Promo.findById(req.params.id);
    if (!promo) return res.status(404).json({ msg: 'Promo not found' });

    // add only once
    if (!promo.interestedClients.some(id => id.equals(user._id))) {
      promo.interestedClients.push(user._id);
      await promo.save();
    }
    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
