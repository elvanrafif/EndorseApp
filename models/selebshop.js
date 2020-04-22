'use strict';
module.exports = (sequelize, DataTypes) => {
  const SelebShop = sequelize.define('SelebShop', {
    SelebId: DataTypes.INTEGER,
    ShopId: DataTypes.INTEGER,
    target: DataTypes.STRING
  }, {});
  SelebShop.associate = function(models) {
    // associations can be defined here
  };
  return SelebShop;
};