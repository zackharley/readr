'use strict';

const mongoose = require('mongoose');

const STATUS_READ = 'read';
const STATUS_UNREAD = 'unread';

const ArticleSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      enum: [STATUS_READ, STATUS_UNREAD],
      default: STATUS_UNREAD,
    },
    url: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = {
  STATUS_READ,
  STATUS_UNREAD,
  Article: mongoose.model('Article', ArticleSchema),
};
