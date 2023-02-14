var express = require('express');
var router = express.Router();
const phonenumbers = require('../src/repositories/phonenumbers')

//Obtener todos los codigos de area ordenados de manera ascendente por el codigo
router.get('/:id', async function(req, res, next) {
    let id = req.params.id;
    try{
        let phoneNumber = await phonenumbers.getPhoneNumberByPk(id);
        if(! phoneNumber) {
            throw new Error('PHONE NUMBER NOT FOUND')
        }
        res.status(200).json(phoneNumber);
    }catch(error) {
        res.status(404).json({message: error.message})
    }
  
});

module.exports = router;
