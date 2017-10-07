const express = require('express');
const router = express.Router();
const userRoute = require('./users');

router.route('/') //should display some type of homepage
.get((req, res, next) => {
  res.render('index', {salutation: 'Welcome to the Enrichment!'});
});

router.use('/users', userRoute);

module.exports = router;
