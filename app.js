const { Sequelize } = require('sequelize');
const express  = require('express')
const app = express();
require('dotenv').config();
// Option 2: Passing parameters separately (sqlite)
  // Option 3: Passing parameters separately (other dialects)
  const { register,login, verify } = require('./controllers/UsersControllers/userController');
const cookieParser = require("cookie-parser")
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static(__dirname+'/public'))
  app.use(cookieParser());
async   function protectVerify(req,res,next)
  {
    if(req.cookies?.verify){
    const idOfUser= Number(req.cookies.verify)

    const user =await  User.findOne({where :{id:idOfUser}})
   if(user && user?.verified==false) next();
   else res.status(401).json({error:"not authorized"})
    }
    else
    {
      res.status(401).json({error:"not authorized"})
    }

    

  }
// Parse application/json
app.use(express.json());
  app.post('/login',login)
  app.post('/register',register)
  app.post('/verify',protectVerify,verify)
 
 app.get('/',(req,res)=>{
  res.sendFile(__dirname+'/public/index.html')
 })
 app.get('/verify',(req,res)=>{
  res.sendFile(__dirname+'/public/verification.html')

 })
const {sequelize,db} = require('./db/models/index.js');
sequelize.sync();
sequelize.authenticate().then(()=>{
    app.listen(3000,((err)=>{
        if(!err)
        {console.log("start listening to request")}
    })
    )
}).catch
 ((err)=>{console.log(err)})
