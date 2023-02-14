var express = require('express');
const { json } = require('sequelize');
var router = express.Router();
var clients = require('../src/repositories/clients')

//Hacer un endpoint que permita dar de alta los datos de personas físicas
router.post('/', async function(req, res, next) {
  let dataClient = req.body;
  const { name, lastname, dni } = dataClient;
  /* console.log('Nombre del cliente: ' + name);
  console.log('Apellido del cliente: ' + lastname);
  console.log('DNI del cliente: ' + dni); */
  try{
    if(!dataClient) {
      throw new Error('BAR REQUEST');
    }
    if(!name || (name.length < 2 || name.length > 50) || (typeof name !== 'string')) {
      throw new Error('WRONG VALUE FOR NAME');
    }
    if(!lastname || (lastname.length < 2 || lastname.length > 50) || (typeof lastname !== 'string')) {
      throw new Error('WRONG VALUE FOR LASTNAME');
    }
    if(!dni || (dni < 10000000 || dni > 70000000) || (typeof dni !== 'number')) {
      throw new Error('WRONG VALUE FOR DNI');
    }
    let newClient = await clients.saveNewClient(name, lastname, dni);
    res.status(201).json(newClient);
  }catch(error) {
    //console.log(error.message);
    res.status(400).json({message: error.message});
  }
});

router.get('/', async function(req, res) {
  const { name, lastname, dni } = req.query;
  try{
    if(!name && !lastname && !dni) {
      throw new Error('SOME VALUE IS REQUIRED FOR THE QUERY')
    }
    let clientFound = await clients.queryClient({ name, lastname, dni })
    console.log('Cliente: ' + clientFound.name);
    res.status(200).json(clientFound);
  }catch(error) {
    res.status(400).json({message: error.message});
  }
})

module.exports = router;
