'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CallCharge extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CallCharge.belongsTo(models.CallRegister)
    }
  }
  CallCharge.init({
    totalCallTime: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    totalToPay: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    callRegisterId: {
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
    modelName: 'CallCharge',
    tableName: 'CallCharges'
  });
  return CallCharge;
};