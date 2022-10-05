const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const user= require('../models/userschema')

dotenv.config({path:'./config.env'})

const fetchuser= async(req,res,next)=>{
    try{
        const token = req.cookies.token
        const verifyuser=jwt.verify(token , process.env.KEY)
        const getuser= await user.findOne({_id:verifyuser._id})
        req.user=getuser
        next();
    } catch(error){
        res.send('unauthorized token')
        console.log(error);
    }
}
module.exports=fetchuser