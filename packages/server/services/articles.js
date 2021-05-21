'use strict';

const _ = require('lodash');
const Mercury = require('@postlight/mercury-parser');
const { Article } = require('../models/article');

const ARTICLE_FIELDS_TO_RETURN = ['_id', 'status'];
const UPDATEABLE_ARTICLE_FIELDS = ['status'];

module.exports = {
  async createArticle(url) {
    return Article.create({ url });
  },
  async deleteArticle(articleId) {},
  async getArticle(articleId) {
    // const article = await Article.findById(articleId);
    const article = {
      url:
        'https://www.theverge.com/2020/4/21/21222533/record-screen-pc-windows-laptop-xbox-game-bar-how-to',
    };
    const parsedArticle = await _parseArticleByUrl(article.url);
    return { ...parsedArticle, ..._.pick(article, ARTICLE_FIELDS_TO_RETURN) };
  },
  async listArticles() {
    // const articles = await Article.find({});
    const articles = [
      {
        _id: '1',
        url:
          'https://www.theverge.com/2020/4/21/21222533/record-screen-pc-windows-laptop-xbox-game-bar-how-to',
      },
    ];
    return Promise.all(
      articles.map(async (article) => {
        const parsedArticle = await _parseArticleByUrl(article.url);
        return {
          ...parsedArticle,
          ..._.pick(article, ARTICLE_FIELDS_TO_RETURN),
        };
      })
    );
  },
  async updateArticle(articleId, update) {
    const actualUpdate = _.pick(update, UPDATEABLE_ARTICLE_FIELDS);
    await Article.findOneAndUpdate({ _id: articleId }, { $set: { status } });
  },
};

async function _parseArticleByUrl(url) {
  const article = await Mercury.parse(url);
  return {
    ...article,
    datePublished: Date.parse(article.date_published),
  };
}
