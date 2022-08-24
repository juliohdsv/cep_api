const { Router } = require('express');
const cepController = require('../controllers/cepController');

const cepRouter = Router();

cepRouter.get('/:codigo', cepController.show);

module.exports = cepRouter;