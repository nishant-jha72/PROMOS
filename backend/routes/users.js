// routes/users.js
const express = require('express');
const User = require('../models/User');
const router = express.Router();

// GET /api/users?role=promoter
router.get('/', async (req, res) => {
  try {
    const { role } = req.query;
    const q = role ? { role } : {};
    const users = await User.find(q).select('-passwordHash').sort({ createdAt: -1 });
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
