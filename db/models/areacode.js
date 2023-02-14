'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AreaCode extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Un area code tiene muchos phone numbers
      AreaCode.hasMany(models.PhoneNumber);
    }
  }
  AreaCode.init({
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
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
    modelName: 'AreaCode',
    tableName: 'AreaCodes'
  });
  return AreaCode;
};