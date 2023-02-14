const { assert } = require('chai')
const request = require('supertest')
const app = require('../app')
const { Client } = require('../db/models')

describe('Register of Clients', function() {
    describe('Al crear...Nombre', function() {
        it('Que el nombre sea requerido en la solicitud', function() {
            return request(app)
            .post('/clients')
            .send(
                {
                    "name": "",
                    "lastname": "Romero",
                    "dni": 11741852
                }
            )
            .expect(400)
            .then(res => {
                assert.equal(res.body.message, 'WRONG VALUE FOR NAME')
            })
        })

        it('Que el nombre solo acepte alfabetico', function() {
            return request(app)
            .post('/clients')
            .send(
                {
                    "name": 1574455,
                    "lastname": "Romero",
                    "dni": 11741852
                }
            )
            .expect(400)
            .then(res => {
                assert.equal(res.body.message, 'WRONG VALUE FOR NAME')
            })
        })

        it('Que el nombre requiera entre 2 a 50 caracteres', function() {
            return request(app)
            .post('/clients')
            .send((
                {
                    "name": "L",
                    "lastname": "Romero",
                    "dni": 11741852
                }
            ))
            .expect(400)
            .then(res => {
                assert.equal(res.body.message, 'WRONG VALUE FOR NAME')
            })

        })
    })

    describe('Al crear...Apellido', function() {
        it('Que el apellido sea requerido en la solicitud', function() {
            return request(app)
            .post('/clients')
            .send(
                {
                    "name": "Lino",
                    "lastname": "",
                    "dni": 11741852
                }
            )
            .expect(400)
            .then(res => {
                assert.equal(res.body.message, 'WRONG VALUE FOR LASTNAME')
            })
        })

        it('Que el apellido solo acepte alfabetico', function() {
            return request(app)
            .post('/clients')
            .send(
                {
                    "name": "Lino",
                    "lastname": 785466,
                    "dni": 11741852
                }
            )
            .expect(400)
            .then(res => {
                assert.equal(res.body.message, 'WRONG VALUE FOR LASTNAME')
            })
        })

        it('Que el apellido requiera entre 2 a 50 caracteres', function() {
            return request(app)
            .post('/clients')
            .send((
                {
                    "name": "Lino",
                    "lastname": "R",
                    "dni": 11741852
                }
            ))
            .expect(400)
            .then(res => {
                assert.equal(res.body.message, 'WRONG VALUE FOR LASTNAME')
            })

        })
    })

    describe('Al crear...DNI', function() {
        it('Que el DNI sea requerido en la solicitud', function() {
            return request(app)
            .post('/clients')
            .send(
                {
                    "name": "Lino",
                    "lastname": "Romero"
                }
            )
            .expect(400)
            .then(res => {
                assert.equal(res.body.message, 'WRONG VALUE FOR DNI')
            })
        })

        it('Que el DNI solo acepte valores numericos', function() {
            return request(app)
            .post('/clients')
            .send(
                {
                    "name": "Lino",
                    "lastname": "Romero",
                    "dni": "este es mi dni"
                }
            )
            .expect(400)
            .then(res => {
                assert.equal(res.body.message, 'WRONG VALUE FOR DNI')
            })
        })

        it('Que el DNI acepte valores entre 10000000 y 70000000', function() {
            return request(app)
            .post('/clients')
            .send((
                {
                    "name": "Lino",
                    "lastname": "Romero",
                    "dni": 9999999
                }
            ))
            .expect(400)
            .then(res => {
                assert.equal(res.body.message, 'WRONG VALUE FOR DNI')
            })

        })
    })
})

describe('Al listar...', function() {
    let client;
    const lastnameValue = 'ani';

    it('Que el endpoint no devuelve resultados si el query string está vacío', function() {
        return request(app)
        .get('/clients')
        .expect(400)
        .then(res => {
            assert.equal(res.body.message, 'SOME VALUE IS REQUIRED FOR THE QUERY')
        })
    })

    before(async function() {
        client = await Client.create({
            name: "Cosme",
            lastname: "Fulanito",
            dni: 11741852
        })
        return client
    })

    after(async function() {
        return await client.destroy()
    })

    it('verificar que al buscar por alguna coincidencia parcial, por ejemplo ani , devuelve ese usuario', function() {
        return request(app)
        .get('/clients?lastname=' + lastnameValue)
        .expect(200)
        .then(res => {
            assert.isNotEmpty(res.body, 'La lista devuelta esta vacio, ya que no consiguio el cliente buscado')
            assert.isArray(res.body, 'NO se ha devuelto una lista de clientes')
        })
    })
})