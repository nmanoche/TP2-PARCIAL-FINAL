const { CallRegister } = require('../../db/models')

const getListCalls = async (phoneNumberFrom, phoneNumberTo) => {
    return await CallRegister.findAll({
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        where: {
            phoneNumberFrom,
            phoneNumberTo
        }
    })
}

module.exports = {
    getListCalls
}