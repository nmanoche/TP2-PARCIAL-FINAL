const phonenumbers = require('./phonenumbers')
const devices = require('./devices')

const associateDeviceToPhoneNumber = async (brand, model, imei, locked) => {
    let { id } = await phonenumbers.getPhoneNumerAvailable();
    let device = await devices.createDevice(brand, model, imei, locked, id);
    await phonenumbers.setNotAvailablePhoneNumber(id);
    return devices.findDeviceByPk(device.id);
}

module.exports = {
    associateDeviceToPhoneNumber
}