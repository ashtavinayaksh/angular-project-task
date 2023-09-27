// models/Data.js
const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Data = sequelize.define('data', {
  // Define your data schema here
});

module.exports = Data;
