const Sequelize = require('sequelize');
const db = require('./db');

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  awards: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  mentors: {
    type: Sequelize.STRING
  }
});

User.findUsersViewModel = function() {
// return a promise so that the route (../routes/users) can '.then' off of promise
  return new Promise((resolve, reject) => {
    resolve({
      user: 'blah',
      award: 'rah',
      mentor: 'ah'
    });
  });
};

module.exports = User;
