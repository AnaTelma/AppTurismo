var express = require('express');
var router = express.Router();
var pontosturisticosController = require('../controls/pontosturisticosController.js');

router.get('/', pontosturisticosController.getpontosturisticos);
router.post('/', pontosturisticosController.createpontosturisticos);
router.get('/:id', pontosturisticosController.getonepontosturisticos);
router.get('/cpf/:id', pontosturisticosController.getonepontosturisticosCPF);
router.put('/:id', pontosturisticosController.updatepontosturisticos);
router.delete('/:id', pontosturisticosController.deletepontosturisticos);

module.exports = router;