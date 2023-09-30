const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Progress extends Model {}

Progress.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    description: {
      type: DataTypes.TEXT('long'),
      allowNull: false
    },
    water_amt: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    temperature: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    humidity: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    height: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    leaf_growth: {
      type: DataTypes.STRING,
      allowNull: true
    },
    weather: {
      type: DataTypes.STRING,
      allowNull: true
    },
    garden_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'garden',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'progress'
  }
);

module.exports = Progress;
