

module.exports=(Sequelize,sequelize )=>
{
const  User = sequelize.define("user",{
email :
{
  type:Sequelize.STRING
 
}
,password:
{
  type : Sequelize.STRING 
},
verified :
{
  type :Sequelize.BOOLEAN
},
verificationString :
{  
  type : Sequelize.STRING 

}

})
return User
}