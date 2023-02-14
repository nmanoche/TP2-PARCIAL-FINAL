const { assert } = require('chai')
const request = require('supertest')
const app = require('../app')
const { AreaCode } = require('../db/models')

let areaCodesQuantityOriginal;
let areaCodesQuantityAfter;
let differenceAreaCodes;

const areaCodeList = [
    {
        city: "Mar del Plata",
        code: 49
    },
    {
        city: "Tartagal",
        code: 16
    },
    {
        city: "Pirquitas",
        code: 19
    },
    {
        city: "Caicara",
        code: 41
    }
];

const areaCodesCreated = [];

describe('Test Codigos de Area', function() {

    before(async function() {
        let areaCodesOriginal = await AreaCode.findAll();
        areaCodesQuantityOriginal = areaCodesOriginal.length;
        console.log('BEFORE Cantidad de codigos de area ANTES de cargar nuevos: ' + areaCodesQuantityOriginal);

        for(let i = 0; i < areaCodeList.length; i++) {
            let areaCode = await AreaCode.create({
                city: areaCodeList[i].city,
                code: areaCodeList[i].code
            })
            areaCodesCreated.push(areaCode);
        }

        let areaCodesAfter = await AreaCode.findAll();
        areaCodesQuantityAfter = areaCodesAfter.length;
        console.log('BEFORE Cantidad de codigos de area DESCPUES de cargar nuevos: ' + areaCodesQuantityAfter);
        differenceAreaCodes = areaCodesQuantityAfter - areaCodesQuantityOriginal;
    })

    after( async function() {
        for(let i = 0; i < areaCodesCreated.length; i++) {
            await AreaCode.destroy({
                where: {
                    id: areaCodesCreated[i].id
                }
            })
        }
    })

    it('Conociendo cuantos códigos de area cargué en la base de datos desde el test (no desde el seeder), comprobar que devuelve la misma cantidad', function() {
        return request(app)
        .get('/area_codes')
        .expect(200)
        .then(res => {
            console.log('Cantidad de codigos de area ANTES de cargar nuevos: ' + areaCodesQuantityOriginal);
            console.log('Cantidad de codigos de area DESCPUES de cargar nuevos: ' + areaCodesQuantityAfter);
            assert.lengthOf(res.body, areaCodesQuantityAfter, 'La cantidad de codigos cargados es INCORRECTA')
        })
    })
})