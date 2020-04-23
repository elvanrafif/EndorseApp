'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model
  class Seleb extends Model{}
  Seleb.init({
    name: {
      type: DataTypes.STRING,
       validate:{
         notEmpty:{
           msg : 'Name Required'
         }
       }
     },
    age: {
      type: DataTypes.INTEGER,
       validate:{
         notEmpty:{
           msg : 'Age Required'
         }
       }
     },
    gender: {
      type: DataTypes.STRING,
       validate:{
         notEmpty:{
           msg : 'Gender Required'
         }
       }
     },
    followers: {
      type: DataTypes.INTEGER,
       validate:{
         notEmpty:{
           msg : 'Followers Required'
         },
         min: 
         {
           args: 10000,
          msg : 'Followers Minimal 10k'
         },
       }
     },
    fee: {
      type: DataTypes.INTEGER,
       validate:{
         notEmpty:{
           msg : 'Fee Required'
         },
         min: 
         {
           args: 1000000,
          msg : 'Minimal Fee 1 Juta'
         },
       }
     }
  }, { sequelize });
  Seleb.associate = function(models) {
    // associations can be defined here
    Seleb.belongsToMany(models.Shop,{through:models.SelebShop})
  };
  return Seleb;
};