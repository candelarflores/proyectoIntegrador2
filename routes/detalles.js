let express = require('express');
let router = express.Router();

const controller = require('../controllers/detallesController');

/* localhost:3000/detalles */
router.get('/', controller.detalles);
router.post('/', controller.create);

module.exports = router;