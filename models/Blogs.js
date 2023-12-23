const mongoose = require('mongoose');

require("./connect");

const blogsSchema = new mongoose.Schema({
    title:String,
    account:{
        type: mongoose.Types.ObjectId,
        ref:'User'
    },
    author:{
        type: String,
        required:true
    },
    imgUrl:String,
    content:String,
    comments:{
        type:Array,
        default:[]
    },
    createdAt:{
        type: Date,
        default: Date.now()
    }   
})

const blogs = new mongoose.model("Blog",blogsSchema);

module.exports.blogs = blogs;