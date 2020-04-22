'use strict';
module.exports = (sequelize, DataTypes) => {
  const Seleb = sequelize.define('Seleb', {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    followers: DataTypes.INTEGER,
    fee: DataTypes.INTEGER
  }, {});
  Seleb.associate = function(models) {
    // associations can be defined here
  };
  return Seleb;
};