const Url = require('../models/url');
const { redisClient } = require('../utils/redisClient');

exports.createShortUrl = async ({ longUrl, customAlias, topic }, userId) => {
  const shortUrl = customAlias || Math.random().toString(36).substr(2, 8);
  const url = await Url.create({ longUrl, shortUrl, customAlias, topic, userId });


  redisClient.set(shortUrl, longUrl);
  return url;
};

exports.getUrlAnalytics = async (alias) => {
  const analytics = await Url.findOne({ where: { shortUrl: alias } });
  return analytics;
};

exports.getOverallAnalytics = async (userId) => {
  const urls = await Url.findAll({ where: { userId } });
  return urls;
};
