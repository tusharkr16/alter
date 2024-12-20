const express = require('express');
const passport = require('passport');
const { googleLogin } = require('../controllers/authController');

const router = express.Router();

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), googleLogin);

module.exports = router;
