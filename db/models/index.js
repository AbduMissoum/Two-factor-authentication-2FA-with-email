const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASENAME,
  process.env.DBUSER ,
    process.env.DATABASEPASS, {
   host: process.env.HOST,
   dialect:  'mysql' 
 });
 

 const db ={}
 db.Users= require('./Users')(sequelize,Sequelize)
console.log(db.User)
 module.exports={sequelize,db}