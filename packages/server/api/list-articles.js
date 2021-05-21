const articlesService = require('../services/articles');
const vercelUtils = require('../utils/vercel')
const { connectToDb } = require('../utils/db');

module.exports = vercelUtils.get(async (req, res) => {
  connectToDb();
  const articles = await articlesService.listArticles();
  return res.status(200).send({ articles });
});
