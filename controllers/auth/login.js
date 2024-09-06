
const  {Users} = require('../../db/models/index.js').db
const bcrypt = require("bcrypt")
const sendMail = require('../../functions/sendVerificationCode.js')
const jwt = require('jsonwebtoken')
const crypto = require("crypto");

module.exports =async(req,res)=>
    {
        try{
    const {mail,password} = req?.body 
    if(!mail  || !password) return res.status(401).
    json({error:true,
        errorMessage:"Bad request"
    })
    const user = await Users.findOne({where:{
        mail:mail
    }})
    if(!user)return res.status(404).json({error:true,
        errorMessage:"User Not found "
    })
    const isUserExist = await bcrypt.compare(password,user.password)
if(!isUserExist) return res.status(404).json({error:true,
        errorMessage:"User Not found  "})
        else 
        {
        if(user.verified)
        {
            const token = jwt.sign({id:user.id},process.env.JWTSECRETKEY,
                )
                res.cookie('jwt',token,{httpOnly:true,secure:true,
                    maxAge:1000*60*10*40
                })
            res.status(200).json({error:false,
                message:"User is authenticated"
            })
        }
        else
        {
            const verificationString = crypto.randomBytes(5)
            .toString('hex')
            .slice(0, 5);
            await Users.update({verificationString:verificationString},
                {where:
                    {
                        id:user.id
                    }
                }
            )
            sendMail(user.mail,verificationString)
        const token = jwt.sign(
            {id:user.id}, process.env.VERIFICATIONSECRETKEY,
         
            {}  )
              res.cookie('verify',token,   {maxAge:1000*60*10,
                httpOnly:true
            })
            res.status(404).json({
                error:false,
                message:'verification code is sent via email'

            })

        }




        }

}
catch(err)
{
console.log(err)
res.status(500).json({error:true,
    errorMessage:'Internal server error'
})
}
        
    }