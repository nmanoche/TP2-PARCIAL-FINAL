var express = require('express');
var router = express.Router();
var call_lists = require('../src/repositories/call_lists');

// Obtener lista de llamadas entre numeros telefonicos
router.get('/', async function(req, res, next) {
  const { from, to } = req.query;
  try{
    if(from.length == 0 || to.length == 0) {
      throw new Error('BAD REQUEST: BOTH FIELDS REQUIRED');
    }
    let callList = await call_lists.getListCalls(from, to);
    res.status(201).json(callList);
  }catch(error) {
    res.status(400).json({message: error.message})
  }
});

module.exports = router;
