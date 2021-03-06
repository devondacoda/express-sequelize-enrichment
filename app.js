const express = require('express');
const app = express();
const db = require('./models/db');
const bodyParser = require('body-parser');
const router = require('./routes');
const nunjucks = require('nunjucks');
const User = require('./models/user');


app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render);// when res.render works with html files, have it use nunjucks to do so
nunjucks.configure('views', {noCache: true});


// sync up database to have access, create fields, and make sure server is listening
const PORT = 3000;
db.sync({ force: true })
.then(() => {
  User.bulkCreate([{
    name: 'Charles'
  }, {
    name: 'Amy'
  }, {
    name: 'David'
  }]);
})
.then(() => {
  // send requests over to router to handle
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(bodyParser.json());
  app.use(router);
  app.listen(PORT, () => {
    console.log('server running on port', PORT);
  });
})
.catch(console.error);
