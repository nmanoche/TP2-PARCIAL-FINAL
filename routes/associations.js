var express = require('express');
var router = express.Router();
const devices = require('../src/repositories/devices')
const phonenumbers = require('../src/repositories/phonenumbers')
const associations = require('../src/repositories/associations')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({hello:'Hello word'});
});

//Asociar una linea telefonica preexistente a un dispositivo nuevo
router.post('/', async function(req, res, next) {
  let deviceInfo = req.body;
    const { brand, model, imei, locked } = deviceInfo;
  try{
    if(Object.keys(deviceInfo).length == 0) {
      throw new Error('BAD REQUEST');
    }
    if(await devices.isLocked(locked)) {
      throw new Error('DEVICE IS LOCKED');
    }
    if(! await phonenumbers.thereIsAvailability()) {
      throw new Error('NO PHONE NUMBERS AVAILABLE')
    }
    
    let deviceAssociated = await associations.associateDeviceToPhoneNumber(brand, model, imei, locked);
    res.status(201).json(deviceAssociated);

  }catch(error) {
    res.status(400).json({message : error.message})
  }
});

module.exports = router;
