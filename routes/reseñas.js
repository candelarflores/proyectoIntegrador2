var express = require('express');
var router = express.Router();

const controller = require('../controllers/reseñasController')

router.get('/:id', controller.reseña)
/* GET home page. */


module.exports = router;