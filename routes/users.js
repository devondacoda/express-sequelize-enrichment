const router = require('express').Router();
const User = require('../models/user');

const redirect = (res) => {
  return () => {
    res.redirect('/users');
  };
};

//READ (coming from /users)
router.get('/', (req, res, next) => {
  User.findUsersViewModel()
    .then(( viewModel ) => {
      res.render('users', viewModel); // res.render's 1st param is title of file(html). Its 2nd param is an object whose properties replace nunjucks variables
    })
    .catch(next);
});

//CREATE
router.post('/', (req, res, next) => { // ::TODO work on post route
  User.create(req.body).then(console.log)
    .then(redirect(res))
    .catch(next);
});

// //DELETE
// router.delete('/:id', (req, res, next) => {
//   User.destroyById(req.params.id)
//     .then(redirect(res))
//     .catch( next);
// });

// //UPDATE
// router.put('/:id', (req, res, next) => {
//   User.updateUserFromRequestBody(req.params.id, req.body)
//     .then(redirect(res))
//     .catch(next);
// });

// //CREATE AWARD
// router.post('/:id/awards', (req, res, next) => {
//   User.generateAward(req.params.id)
//     .then(redirect(res))
//     .catch(next);
// });

// //DELETE AWARD
// router.delete('/:userId/awards/:id', (req, res, next) => {
//   User.removeAward(req.params.userId, req.params.id)
//     .then(redirect(res))
//     .catch( next);
// });

module.exports = router;
