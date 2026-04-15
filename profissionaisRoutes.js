const express = require('express');
const router = express.Router();
const controller = require('../controllers/profissionaisController');

router.get('/', controller.listar);
router.get('/buscar', controller.buscar);

module.exports = router;