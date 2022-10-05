const express = require('express')
const router = express.Router()
const user= require('../models/userschema')
const bcrypt= require('bcryptjs')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const fetchuser = require('../middleware/fetchuser')

dotenv.config({path:'./config.env'})

//createuser
router.post('/createuser', async(req,res)=>{
    try {
        console.log(req.files);
        const file = req.files.img
        const filename = Date.now()+'_'+req.files.img.name
        console.log(filename);
        const path2= `/uploads/${filename}`
        uploadpath='C:/Users/ANUJ/blogapp/client/public/uploads/'+filename
        file.mv(uploadpath)
        const {name,email,password}=req.body
        const finduser= await user.findOne({email:email})
        if(finduser){
            return res.json({message:'user with this email already exists'})
        }
        else{
            const secpass = await bcrypt.hash(password , 10)
            const newuser= new user({name:name,email:email,password:secpass,imagepath:path2})
            newuser.save()
        }
    } catch (error) {
        console.log('error');
    }
})
//login
router.post('/login' , async(req,res)=>{
    try {
        const{email,password}=req.body
        if(!email || !password){
            return res.json({message:'plz fill the details properly'})
        }
        else{
            const finduser = await user.findOne({email:email})
            if(finduser){
               const checkpassword = await bcrypt.compare(password, finduser.password)
               if(checkpassword){
                  const token = jwt.sign({_id:finduser._id} , process.env.KEY)
                  res.cookie('token', token)
                  return res.json({message:'logged in successful'})
               }
               else{
                return res.json({message:'invalid credentials'})
               }
            }
            else{
                return res.json({message:'invalid credentials'})
            }
        }
    } catch (error) {
        console.log('internal server error');
    }
})
//getuser
router.get('/about',fetchuser, async(req,res)=>{
    try {
        res.json(req.user)
    } catch (error) {
        console.log('internal server error');
    }
})
module.exports=router