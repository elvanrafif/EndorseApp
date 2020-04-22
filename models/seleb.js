'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model
  class Seleb extends Model{}
  Seleb.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    followers: DataTypes.INTEGER,
    fee: DataTypes.INTEGER
  }, { sequelize });
  Seleb.associate = function(models) {
    // associations can be defined here
  };
  return Seleb;
};