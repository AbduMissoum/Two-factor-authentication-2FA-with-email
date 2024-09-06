const jwt = require('jsonwebtoken')
const {Users} = require('../../db/models/index')
const resendVerificationCode= async(req,res)=>
{
const tokenJwt = req.cookies?.verify
if(!tokenJwt) return res.status(401).json({error:true,
    errorMessage:'Not authorized'
})

jwt.verify(cookie,  process.env.VERIFICATIONSECRETKEY
    , async (err, decoded) => {

    if (err) {
        return   res.status(500).json({error:true,
            errorMessage:"Invalid cookie"
          })
    }
const userId =decoded.id;
const user = await Users.findByPk(userId)

if(!user || user?.verified==true) return  res.status(401).json({error:true,
    errorMessage:!user?"user not found":"user already verified"

})
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



    })






}
module.exports=resendVerificationCode