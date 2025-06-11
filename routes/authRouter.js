const express = require('express');
const router = express.Router();
const { login, signUp, logout } = require('../controller/authController');

router.post('/login', login);
router.post('/logout',logout)

module.exports = router;
