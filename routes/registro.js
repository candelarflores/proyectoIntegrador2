var express = require('express');
var router = express.Router();

const controller = require('../controllers/registroController')

router.get('/', controller.registro)
/* GET home page. */


module.exports = router;
