var express = require('express');
var router = express.Router();

var controller_ibm = require('../controller/ibm_controller');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* GET home page. */
router.get('/homepage', function(req, res, next) {
  res.render('home', { title: 'Data Analytics' });
});


/* POST API home page. */
router.post('/api/personality', controller_ibm);

  // ibm - watson
// 




module.exports = router;
