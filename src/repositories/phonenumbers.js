const { where } = require('sequelize')
const { PhoneNumber, Device, AreaCode } = require('../../db/models')
const AVAILABLE = 1;
const NOT_AVAILABLE = 2;

const thereIsAvailability = async () => {
    return await getPhoneNumerAvailable() != null;
}

const getPhoneNumerAvailable = async () => {
    return await PhoneNumber.findOne({
        where: {
            availabilityId: AVAILABLE
        }
    })
}

const setNotAvailablePhoneNumber = async (phoneNumberId) => {
    return await PhoneNumber.update({
        availabilityId: NOT_AVAILABLE
        },
        {
            where: {
                id: phoneNumberId
            }
        })
}

const getPhoneNumberByPk = async (phoneNumberId) => {
    return PhoneNumber.findOne({
        attributes: { exclude: ['createdAt', 'updatedAt', 'AreaCodeId', 'AvailabilityId'] },
        where: {
            id: phoneNumberId
        },
        include: [
            {
                model: AreaCode,
                attributes: ['id', 'city', 'code']
            },
            {
                model: Device,
                attributes: ['id', 'brand', 'model', 'imei', 'locked']
            }
        ]
    })
}

module.exports = {
    thereIsAvailability,
    getPhoneNumerAvailable,
    setNotAvailablePhoneNumber,
    getPhoneNumberByPk
}