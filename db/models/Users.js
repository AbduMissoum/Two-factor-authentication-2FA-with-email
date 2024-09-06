
// models/User.js
module.exports=(sequelize,Sequelize)=>{
  const Users = sequelize.define('User', {
      id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
      },
      username: {
          type: Sequelize.STRING,
          unique: true,
          allowNull: false,
      },
      mail: {
          type: Sequelize.STRING,
          unique: true,
          allowNull: false,
      },
      password: {
          type: Sequelize.STRING,
          allowNull: false,
      },
      role: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: 'User',
      },
     
      verificationString: {
          type: Sequelize.STRING,
           allowNull:false,
      },
      verified: {
          type: Sequelize.BOOLEAN,
          defaultValue: false,
      },
      status: {
          type: Sequelize.STRING,
          defaultValue: 'active',
      },
      fullName: {
          type: Sequelize.STRING,
          allowNull: false,
      },
      description: {
          type: Sequelize.STRING,
          defaultValue: '',
      },
      image_path: {
          type: Sequelize.STRING,
          allowNull:true,
          default:""
      },
  }
  )
  return Users;
  
   
  
  
  }