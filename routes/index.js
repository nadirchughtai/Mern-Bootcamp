// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('index', { title: 'Welcome to the Express' });
// });

// module.exports = router;

//for all routes

const userRoutes = require('./userRoutes');
const adminRoutes = require('./adminRoutes');
const clientRoutes = require('./clientRoutes');

module.exports = {
  userRoutes,
  adminRoutes,
  clientRoutes,
};
