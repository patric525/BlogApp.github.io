const express= require('express')
const dotenv= require('dotenv')
const cookieParser = require("cookie-Parser") ;

const fileUpload = require('express-fileupload')

const app = express()
app.use(fileUpload())
app.use(cookieParser()) ;
app.use(express.json())

dotenv.config({path:'./config.env'})

const port = process.env.PORT

require('./connectiontodb/db')
app.use(require('./route/auth'))
app.use(require('./route/blog'))
app.get('/',(req,res)=>{
    res.send('hello world')
})
app.listen(port , ()=>{
    console.log(`App is running on port ${port}`);
})