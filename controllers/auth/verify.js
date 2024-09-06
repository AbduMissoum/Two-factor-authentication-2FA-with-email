const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt");
const { where } = require('sequelize');
const {Users} = require('../../db/models/index').db

module.exports =async (req,res)=>
{
    try{
    const cookie = req.cookies?.verify;
    if(!cookie) {
        return  res.status(401).json({error:true,
        errorMessage:"Not authorized"
    
    })
}
    jwt.verify(cookie,  process.env.VERIFICATIONSECRETKEY
        , async (err, decoded) => {

        if (err) {
            return   res.status(500).json({error:true,
                errorMessage:"Invalid cookie"
              })
        }

 const user = await Users.findByPk(userId)
 
 if(!user || user?.verified==true) return  res.status(401).json({error:true,
        errorMessage:!user?"user not found":"user already verified"

    })
else
{
    const {verificationString} = req?.body;
    if(user.verificationString==verificationString)
        { 
            const token = jwt.sign(
                {id:user.id}, process.env.JWTSECRETKEY,
             
                 )
                 res.cookie('verify','',{maxAge:1000})
                  res.cookie('jwt',token,   {maxAge:1000*60*10*40,
                    httpOnly:true,secure:true
                })
 await Users.update({verified:true},{where
   : {
        id:user.id
    }
 })


            res.status(201).json({error:false,
    message:"User created successfully"});

        }
        else return res.status(400).json({error:true,
            errorMessage:"Bad request"
        })
}




    })
}
    catch(err)
    {
          console.log(err)
          res.status(500).json({error:true,
            errorMessage:"Internal sarver error"
          })
    }


}