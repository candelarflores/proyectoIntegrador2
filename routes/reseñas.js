var express = require('express');
var router = express.Router();

const controller = require('../controllers/reseñasController')

router.get('/:id', controller.reseña)
/* GET home page. */
router.get('/edit/:id', controller.edicion)

router.post('/editE', controller.editar)


router.get('/delete/:id', controller.delete)

router.post('/deleteR', controller.borrar)


module.exports = router;