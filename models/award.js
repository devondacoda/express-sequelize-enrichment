const Sequelize = require('sequelize');
const db = require('./db');
const User = require('./user');

const Award = db.define('award', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

Award.belongsTo(User, {as: 'student'});
module.exports = Award;
