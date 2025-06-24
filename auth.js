const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

router.post('/login', async (req, res) => {
  const { username } = req.body;
  if (!username) return res.status(400).json({ error: 'Username required' });

  let user = await User.findOne({ username });
  if (!user) user = await User.create({ username });

  const token = jwt.sign({ id: user._id, username }, process.env.JWT_SECRET, { expiresIn: '1d' });
  res.json({ token, username });
});

module.exports = router;
