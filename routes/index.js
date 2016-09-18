var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'My App',
    age: '33',
    name: 'Eric'
  });

});

// router.get('/', function(req, res) {
//   res.send(200);
// });

module.exports = router;
