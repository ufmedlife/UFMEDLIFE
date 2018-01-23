
const config = require('./config');
const mongoose = require ('mongoose');
var MongoClient = require('mongodb').MongoClient;


module.exports = function() {
  const db = mongoose.connect(config.db);

  //including the user schema in order to register the User model
  require('../app/models/user.server.model');
  require('../app/models/event.server.model');

  return db;
};
