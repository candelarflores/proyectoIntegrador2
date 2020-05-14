var express = require('express');
var router = express.Router();

const controller = require('../controllers/indexcontroller')

router.get('/', controller.index)
/* GET home page. */


module.exports = router;
