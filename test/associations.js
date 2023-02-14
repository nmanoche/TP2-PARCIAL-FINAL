const { assert } = require('chai')
const request = require('supertest')
const app = require('../app')
const { Device, PhoneNumber } = require('../db/models')

let phoneId;
const AVAILABLE = 1;
const NOT_AVAILABE = 2;
let phoneNumbersFiltered;

const deleteAssociation = async (id) => {
    let deviceToDelete = await Device.findOne({
        where: {
            id
        }
    })
    phoneId = deviceToDelete.phoneNumberId;
    console.log('ID del phone number a modificar: ' + phoneId);
    return await deviceToDelete.destroy();
}

const setAvailablePhoneNumber = async (phoneNumberId) => {
    return await PhoneNumber.update(
        {
            availabilityId: AVAILABLE
        },
        {
            where: {
                id: phoneNumberId
            }
        }
    )
}

describe('Tests de Dispositivos', function() {

    after(async function() {
        for(let i = 0; i < phoneNumbersFiltered.length; i++) {
            await phoneNumbersFiltered[i].update(
                {
                    availabilityId: AVAILABLE
                }
            )
        }
    })

    it('Que al dar de alta un dispositivo bloqueado, falla el intento y responder con un error', async function() {
        return request(app)
        .post('/associations')
        .send(
            {
                brand: "Xiaomi",
                model: "R45",
                imei: "010929/00/389023/2",
                locked: 1
            }
        )
        .expect(400)
        .then(async res => {
            assert.equal(res.body.message, 'DEVICE IS LOCKED')

        })
    })

    it('Que al dar de alta un dispositivo, si todo es correcto, responde con codigo 201', async function() {
        return request(app)
        .post('/associations')
        .send(
            {
                brand: "Apple",
                model: "R22",
                imei: "010948/00/389023/2",
                locked: 0
            }
        )
        .expect(201)
        .then(async (res) => {
            assert.isObject(res.body, 'El response del endpoint no es un objeto')
            await deleteAssociation(res.body.id);
            await setAvailablePhoneNumber(phoneId);
        })
    })

    it('Que si no hay lineas disponibles, falla y responde con error', async function() {

        let phoneNumbers = await PhoneNumber.findAll();
        phoneNumbersFiltered = phoneNumbers.filter(phone => phone.availabilityId === AVAILABLE)
        for(let i = 0; i < phoneNumbersFiltered.length; i++) {
            await phoneNumbersFiltered[i].update(
                {
                    availabilityId: NOT_AVAILABE
                }
            )
        }

        return request(app)
        .post('/associations')
        .send(
            {
                brand: "Apple",
                model: "R22",
                imei: "010948/00/389023/2",
                locked: 0
            }
        )
        .expect(400)
        .then(async (res) => {
            assert.equal(res.body.message, 'NO PHONE NUMBERS AVAILABLE')
        })
    })
})