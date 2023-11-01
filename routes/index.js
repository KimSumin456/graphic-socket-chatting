const express = require('express');
const { renderMain, renderChat } = require('../controllers');

const router = express.Router();

router.get('/main', renderMain);

router.post('/chat', renderChat);

module.exports = router;