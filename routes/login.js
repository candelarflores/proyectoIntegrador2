var express = require('express');
var router = express.Router();

const controller = require('../controllers/loginController')

router.get('/', controller.login)
/* GET home page. */
router.post('/', controller.validar)

module.exports = router;
