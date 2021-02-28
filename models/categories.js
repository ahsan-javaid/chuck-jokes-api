'use strict';

const mongoose = require('mongoose');
const name = 'Categories';
const Model = function () {
  const schema = mongoose.Schema({
      name: {type: String, default: ""},
    },
    {collection: name});
  return mongoose.model(name, schema);
};

module.exports = new Model();
