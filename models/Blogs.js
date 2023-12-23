const mongoose = require('mongoose');



const blogsSchema = new mongoose.Schema({
    title: String,
    author: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    imgUrl: String,
    content: String,
}, {
    timestamps: true
})

const blogs = new mongoose.model("Blog", blogsSchema);

module.exports = blogs;