const { CallCharge, CallRegister } = require('../../db/models')
const TO_60 = 1;
const TO_180 = 0.85;
const MORE_180 = 0.75;

const calculateCallTime = (dateInit, dateFinish) => {
    let difference = dateFinish.getTime() - dateInit.getTime();
    console.log('Diferencia de mimutos: ' + difference);
    let minutes = Math.round(difference / 60000);
    console.log('minutos convertidos: ' + minutes);
    return minutes;
}

const calculateCallCharge = (callMinutes) => {
    if(callMinutes <= 60) {
        return callMinutes * TO_60;
    }else if(callMinutes > 60 && callMinutes <= 180) {
        return callMinutes * TO_180;
    }else {
        return callMinutes * MORE_180;
    }
}

const setCallCharges = async (idCallRegister) => {
    let callRegister = await CallRegister.findOne({
        where: {
            id: idCallRegister
        }
    })
    let callRegisterId = callRegister.id;
    console.log('Id del registro de llamada: ' + callRegisterId);
    let dateInit = callRegister.timeInit;
    console.log('Fecha inicio de llamada: ' + dateInit);

    let dateFinish = callRegister.timeFin;
    console.log('Fecha fin de llamada: ' + dateFinish);

    let totalCallTime = calculateCallTime(dateInit, dateFinish);
    let totalToPay = calculateCallCharge(totalCallTime);
    return await CallCharge.create({
        totalCallTime,
        totalToPay,
        callRegisterId
    })
}

module.exports = {
    setCallCharges
}