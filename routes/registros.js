let express = require('express');
let router = express.Router();
const controller = require('../controllers/registrosController')

/* localhost:3000/registros */
router.get('/', controller.registros);

router.post("/", controller.guardar);


module.exports = router;