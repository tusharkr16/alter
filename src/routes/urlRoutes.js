const express = require('express');
const { shortenUrl, getAnalytics, getOverallAnalytics } = require('../controllers/urlController');
const { rateLimiter } = require('../utils/rateLimiter');

const router = express.Router();

router.post('/shorten', rateLimiter, shortenUrl);
router.get('/analytics/:alias', getAnalytics);
router.get('/analytics/overall', getOverallAnalytics);

module.exports = router;
