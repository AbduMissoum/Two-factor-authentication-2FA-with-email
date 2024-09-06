const logout = (req,res)=>{

res.cookie('jwt','',{maxAge:1000})//one second 

res.status(200).json({error:false})


}
module.exports = logout;