const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
    user:{
      type:String,
      require:true
    },
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    Date:{
        type:Date,
        default:Date.now()
    },
    imagepath:{
        type:String,
        require:true
    },
    del:{
        type:String,
        require:true
    },
    create:{
        type:String,
        reuire:true
    },
    username:{
        type:String,
        require:true
    }
})
const blog = mongoose.model('blog', blogSchema)
module.exports=blog