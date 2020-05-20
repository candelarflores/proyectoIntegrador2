var express = require('express');
var router = express.Router();

const controller = require('../controllers/loginController')

router.get('/', controller.login)
/* GET home page. */
router.post('/', controller.entrar)

module.exports = router;
