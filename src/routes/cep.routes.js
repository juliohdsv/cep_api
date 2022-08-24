const { Router } = require('express');
const cepController = require('../controllers/cepController');

const cepRouter = Router();

cepRouter.get('/', cepController.screen);
cepRouter.get('/cep/:codigo', cepController.show);
cepRouter.post('/cep', cepController.search);

module.exports = cepRouter;