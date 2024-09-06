const { Sequelize } = require('sequelize');
const express  = require('express')
const app = express();
const rateLimit = require('express-rate-limit')
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger.js'); // Import the Swagger spec
const limiter = rateLimit({
	windowMs: 5 * 60 * 1000, // 5 minutes
	limit: 50, // Limit each IP to 50 requests per `window` (here, per 5 minutes).
  message:"too many requests"
	
})

require('dotenv').config();
const authRouter  = require('./routes/authRoutes.js')
    
  const cookieParser = require("cookie-parser")
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
  app.use('/api/v1/auth',authRouter)

// Parse application/json
app.use(express.json());
 
 
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
