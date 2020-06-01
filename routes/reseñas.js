var express = require('express');
var router = express.Router();

const controller = require('../controllers/reseñasController')

router.post('/', controller.reseña)
/* GET home page. */


module.exports = router;