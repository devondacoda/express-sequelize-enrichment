const express = require('express');
const router = express.Router();
const User = require('../models/user');

// /users
router.route('/')
.get((req, res, next) => {
  User.findAll()
  .then(users => {
    res.json(users);
  })
  .catch(next);
});

router.route('/:id')
.get((req, res, next) => {
  User.findById(Number(req.params.id))
  .then(user => {
    res.json(user);
  })
  .catch(next);
})
.put((req, res, next) => {
  User.update();
});

module.exports = router;
