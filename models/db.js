const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost/express-sequelize-enrichment', {logging: false});

module.exports = db;
