'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Device extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //Un device pertenece a un phone number
      Device.belongsTo(models.PhoneNumber);
    }
  }
  Device.init({
    brand: {
      type: DataTypes.STRING,
      allowNull: false
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false
    },
    imei: {
      type: DataTypes.STRING,
      allowNull: false
    },
    locked: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    phoneNumberId: {
      type: DataTypes.INTEGER,
      allowNull: false
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
    modelName: 'Device',
    tableName: 'Devices'
  });
  return Device;
};