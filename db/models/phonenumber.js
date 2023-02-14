'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PhoneNumber extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //Un phone number pertenece a un area code
      PhoneNumber.belongsTo(models.AreaCode);

      // Un phone number tiene un device
      PhoneNumber.hasOne(models.Device);

      //Un phone nnumber pertenece a una availability
      PhoneNumber.belongsTo(models.Availability)
    }
  }
  PhoneNumber.init({
    characteristic: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    number: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    areaCodeId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    availabilityId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
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
    modelName: 'PhoneNumber',
    tableName: 'PhoneNumbers'
  });
  return PhoneNumber;
};