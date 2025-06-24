const express = require('express');
const Message = require('../models/Message');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

router.get('/:room', authMiddleware, async (req, res) => {
  const messages = await Message.find({ room: req.params.room }).sort({ timestamp: 1 });
  res.json(messages);
});

module.exports = router;
