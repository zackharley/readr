'use strict';

const mongoose = require('mongoose');

const MONGO_DB_URI = process.env.MONGO_DB_URI;

module.exports = { connectToDb };

function connectToDb() {
  mongoose.connect(MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}
