'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model
  class SelebShop extends Model{}
  SelebShop.init({
    SelebId: DataTypes.INTEGER,
    ShopId: DataTypes.INTEGER,
    target: DataTypes.STRING
  }, { sequelize });
  SelebShop.associate = function(models) {
    // associations can be defined here
  };
  return SelebShop;
};