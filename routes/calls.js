var express = require('express');
var router = express.Router();
var calls = require('../src/repositories/calls');
var callcharges = require('../src/repositories/callcharges');

// Registrar una llamada
router.post('/initial_calls', async function(req, res, next) {
  let callDatas = req.body;
  try{
    if(Object.keys(callDatas).length == 0) {
      throw new Error('BAD REQUEST: ALL FIELDS REQUIRED');
    }
    let { phoneNumberFrom, phoneNumberTo, timeInit } = callDatas;
    let callRegister = await calls.createCallRegister(phoneNumberFrom, phoneNumberTo, timeInit);
    res.status(201).json(callRegister);
  }catch(error) {
    res.status(400).json({message: error.message})
  }
});

//Finalizar una llamada
router.put('/finish_calls/:id', async function(req, res, next) {
  let idCallRegister = req.params.id;
  console.log('id del registro de llamada: ' + idCallRegister);
  let endTimeCall = req.body;
  let { timeFin } = endTimeCall;
  try{
    let callRegister = await calls.findById(idCallRegister);
    if(!callRegister) {
      throw new Error('CALL REGISTER DOES NOT EXIST FOR THAT ID');
    }
    if(await calls.hasFinished(idCallRegister)) {
      throw new Error('CALL REGISTER HAS FINISHED');
    }
    if(Object.keys(endTimeCall).length == 0) {
      throw new Error('BAD REQUEST: TIME FINISHED IS REQUIRED');
    }
    let finishedRes = await calls.setFinishTimeToCall(idCallRegister, timeFin);
    console.log('finishedRes: ' + finishedRes);
    if(finishedRes == 1) {
      await callcharges.setCallCharges(idCallRegister);

    }
    res.status(201).json('message: ok')

  }catch(error) {
    res.status(400).json({message: error.message})
  }
})

module.exports = router;
