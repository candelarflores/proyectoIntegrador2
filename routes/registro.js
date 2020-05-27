let express = require('express');
let router = express.Router();

const controller = require('../controllers/registroController')

router.get('/', controller.registro)


module.exports = router;