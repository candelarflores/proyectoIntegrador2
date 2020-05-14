let express = require('express');
let router = express.Router();

const controller = require('../controllers/detallesController');

/* localhost:3000/detalles */
router.get('/detalles', controller.detalles);

module.exports = router;