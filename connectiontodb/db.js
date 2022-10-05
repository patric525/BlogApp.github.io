const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({path:'./config.env'})

db=process.env.DATABASE

const connect = async()=>{
    try {
        const conn = await mongoose.connect(db)
        if(conn){
         console.log('connection successful');
        }
    } catch (error) {
        console.log('connection refused');
    }
}
connect()