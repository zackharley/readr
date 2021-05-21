const articlesService = require('../services/articles');
const vercelUtils = require('../utils/vercel');
const { connectToDb } = require('../utils/db');

module.exports = vercelUtils.get(async (req, res) => {
  connectToDb();
  const { articleId } = req.query;
  if (!articleId) {
    const error = new Error('No article ID supplied. It is required!');
    error.status = 400;
    throw error;
  }
  const article = await articlesService.getArticle(articleId);
  if (!article) {
    const message = 'Unable to find an article with the supplied ID';
    console.log(message);
    return res.status(404).send({ message });
  }
  return res.status(200).send({ article });
});
