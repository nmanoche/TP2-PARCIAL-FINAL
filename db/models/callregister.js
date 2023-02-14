'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CallRegister extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CallRegister.hasOne(models.CallCharge)
    }
  }
  CallRegister.init({
    phoneNumberFrom: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phoneNumberTo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    timeInit: {
      type: DataTypes.DATE,
      allowNull: false,
      //defaultValue: Date.now()
    },
    timeFin: {
      type: DataTypes.DATE,
      allowNull: true
    }, 
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: Date.now()
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: Date.now()
    }
  }, {
    sequelize,
    modelName: 'CallRegister',
    tableName: 'CallRegisters'
  });
  return CallRegister;
};