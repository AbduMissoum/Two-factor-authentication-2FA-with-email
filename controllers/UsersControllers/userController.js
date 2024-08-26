const {db}= require('../../db/models/index')
const nodemailer= require("nodemailer");
const crypto = require("crypto");
const User= db.User;
const login = (req,res)=>
{

}
const register = async(req,res)=>{

    const  {password,email,confirmPassword} = req.body;
    try{
    if( password && email)
    {
      const user = await User.findOne({where:{
        email:email
      }})
      if(user ) throw Error("this user already has account ")
     if(password== confirmPassword) {

      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user:""+process.env.USER,
          pass: ""+process.env.PASS,
        }
      });
      const verificationString = crypto.randomBytes(5)
.toString('hex')
.slice(0, 5);
      const mailOptions = {
        from: 'AUTHENTICATION ', // Sender address
        to: email, // List of receivers
        subject: 'verification your identity ', // Subject line
        html: `<h3>this is your verification code is ${verificationString} </h3>` // HTML body
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error);
        }
        console.log('Email sent: ' + info.response);
      });
      

    const user = await User.create({email,password,verified:false,
      verificationString
    })
    res.cookie("verify",""+user.id ,{maxAge:1000*60*10,
      secure:true,
      sameSite:'None',
      httpOnly:true
   
    })


    
    res.status(200).redirect('/verify')
     }
     else 
     {
      throw new Error("write your password correctly")
     }
    }
    else throw new Error("please fill all the neccacery inputs")

    
   }
    catch(err)
    {
console.log(err.message)
res.status(401).json({error:err.message})
    }
}




const verify  = async(req,res)=>
{
  try{
if(req.cookies?.verify)
{
  


if(user.verificationString==req.body?.verificationCode)
{
  
await User.update({verified:true},
  {where :{id:idOfUser}})
  res.status(200).json({message:"user created"})

}else throw Error("unauthorized")
}else  throw Error("unauthorized")

}

  catch(err)
  {
   
  res.status(401).json({error:"problem"})
  }


}
module.exports={register,login,verify}