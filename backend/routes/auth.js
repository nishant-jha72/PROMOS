const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Register
router.post('/register', async (req, res) => {
  try{
    const {name,email,password,role} = req.body;
    if(!name||!email||!password||!role) return res.status(400).json({msg:'Please provide all fields'});
    let user = await User.findOne({email});
    if(user) return res.status(400).json({msg:'User already exists'});
    user = new User({name,email,password: await bcrypt.hash(password,10),role});
    await user.save();
    const payload = {user:{id:user._id,role:user.role}};
    const token = jwt.sign(payload, process.env.JWT_SECRET||'secret', {expiresIn:'7d'});
    res.json({token, user: {id:user._id, name:user.name, email:user.email, role:user.role}});
  }catch(err){
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Login
router.post('/login', async (req, res) => {
  try{
    const {email,password} = req.body;
    if(!email||!password) return res.status(400).json({msg:'Please provide all fields'});
    const user = await User.findOne({email});
    if(!user) return res.status(400).json({msg:'Invalid credentials'});
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) return res.status(400).json({msg:'Invalid credentials'});
    const payload = {user:{id:user._id,role:user.role}};
    const token = jwt.sign(payload, process.env.JWT_SECRET||'secret', {expiresIn:'7d'});
    res.json({token, user: {id:user._id, name:user.name, email:user.email, role:user.role}});
  }catch(err){
    console.error(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;
