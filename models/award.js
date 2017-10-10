const Sequelize = require('sequelize');
const db = require('./db');

const Award = db.define('award', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Award;
