const articlesService = require('../services/articles');
const { connectToDb } = require('../utils/db');

module.exports = vercelUtils.put(async (req, res) => {
  connectToDb();
  const { articleId } = req.query;
  if (!articleId) {
    const message = 'No article ID supplied. It is required!';
    console.log(message);
    return res.status(400).send({ message });
  }
  const update = req.body;
  const article = await articlesService.getArticle(articleId, update);
  if (!article) {
    const message = 'Unable to find an article with the supplied ID';
    console.log(message);
    return res.status(404).send({ message });
  }
  return res.status(200).send({ article });
});


