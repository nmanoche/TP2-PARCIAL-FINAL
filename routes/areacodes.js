var express = require('express');
var router = express.Router();
const areacodes = require('../src/repositories/areacodes')

//Obtener todos los codigos de area ordenados de manera ascendente por el codigo
router.get('/', async function(req, res, next) {
  res.status(200).json(await areacodes.getAllAreaCodesAsc());
});

module.exports = router;
