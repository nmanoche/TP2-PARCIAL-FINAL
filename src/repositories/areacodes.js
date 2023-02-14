const { AreaCode } = require('../../db/models')

const getAllAreaCodesAsc = async () => {
    return await AreaCode.findAll({
        order: [
            ['code', 'ASC']
        ]
    })
}

module.exports = {
    getAllAreaCodesAsc
}