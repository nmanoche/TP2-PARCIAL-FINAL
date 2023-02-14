const { Client } = require('../../db/models');
const { Op } = require("sequelize");

const saveNewClient = async (name, lastname, dni) => {
    return await Client.create({
        name,
        lastname,
        dni
    })
}

let query = {
    where: {}
}

 const queryClient = async (param = {}) => {
    if(param.name) {
        query.where.name = {
            [Op.substring]: param.name
        }
    }

    if(param.lastname) {
        query.where.lastname = {
            [Op.substring]: param.lastname
        }
    }

    if(param.dni) {
        query.where.dni = {
            [Op.substring]: param.dni
        }
    }

    return await Client.findAll(query);
 }

module.exports = {
    saveNewClient,
    queryClient
}