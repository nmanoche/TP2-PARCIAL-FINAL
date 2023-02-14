const { Device } = require('../../db/models')
const IS_LOCKED = 1;

const isLocked = async (locked) => {
    return await locked === IS_LOCKED;
}

const createDevice = async (brand, model, imei, locked, phoneNumberId) => {
    return await Device.create({
        brand,
        model,
        imei,
        locked,
        phoneNumberId
    })
}

const findDeviceByPk = async (deviceId) => {
    return Device.findOne({
        attributes: { exclude: ['createdAt', 'updatedAt', 'PhoneNumberId'] },
        where: {
            id: deviceId
        }
    })
}

module.exports = {
    isLocked,
    createDevice,
    findDeviceByPk
}