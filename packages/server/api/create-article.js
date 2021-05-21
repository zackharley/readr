const articlesService = require('../services/articles');
const vercelUtils = require('../utils/vercel');
const { connectToDb } = require('../utils/db');

module.exports = vercelUtils.post(async function createArticle(req, res) {
  connectToDb();
  const { url } = req.body;
  const article = await articlesService.createArticle(url);
  return res.status(201).send({ article });
});
