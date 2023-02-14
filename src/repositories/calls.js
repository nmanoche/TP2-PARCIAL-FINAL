const { CallRegister } = require('../../db/models')

const createCallRegister = async (phoneNumberFrom, phoneNumberTo, timeInit) => {
    return await CallRegister.create({
        phoneNumberFrom,
        phoneNumberTo,
        timeInit
    })
}

const findById = async (idCallRegister) => {
    return await CallRegister.findOne({
        where: {
            id: idCallRegister
        }
    })
}

const hasFinished = async (idCallRegister) => {
    let callRegister = await CallRegister.findOne({
        where: {
            id: idCallRegister
        }
    })
    return callRegister.timeFin != null;
}

const setFinishTimeToCall = async (idCallRegister, endTimeCall) => {
    return await CallRegister.update(
        {
            timeFin: endTimeCall,
        },
        {
            where: {
                id: idCallRegister
            }
        })
}

module.exports = {
    createCallRegister,
    findById,
    hasFinished,
    setFinishTimeToCall
}