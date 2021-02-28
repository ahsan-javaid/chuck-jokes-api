'use strict';
const mongoose = require('mongoose');
const name = 'Jokes';
const Model = function () {
  const schema = mongoose.Schema({
      categories: {type: Array, default: []},
      created_at: {type: Date, default: Date.now},
      updated_at: {type: Date, default: Date.now},
      icon_url: {type: String, default: ''},
      url: {type: String, default: ''},
      value: {type: String, default: ''},
      likes: {type: Number, default: 0},
      dislikes: {type: Number, default: 0},
    },
    {collection: name});
  return mongoose.model(name, schema);
};

module.exports = new Model();
