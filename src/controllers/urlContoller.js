const { createShortUrl, getUrlAnalytics, getOverallAnalytics } = require('../services/urlService');

exports.shortenUrl = async (req, res) => {
  try {
    const shortUrl = await createShortUrl(req.body, req.user.id);
    res.status(201).json(shortUrl);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAnalytics = async (req, res) => {
  try {
    const analytics = await getUrlAnalytics(req.params.alias);
    res.status(200).json(analytics);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getOverallAnalytics = async (req, res) => {
  try {
    const analytics = await getOverallAnalytics(req.user.id);
    res.status(200).json(analytics);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
