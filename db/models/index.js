const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASENAME,
  process.env.DBUSER ,
    process.env.DATABASEPASS, {
   host: process.env.HOST,
   dialect:  'mysql' 
 });
 

 const db ={}
 console.log(db.User)//undefiend
 db.User= require('./Users')(Sequelize,sequelize)
console.log(db.User)//user why is that ??
 module.exports={sequelize,db}