const express = require('express');
const { renderChat } = require('../controllers');

const router = express.Router();

router.get('/chat', renderChat);

module.exports = router;