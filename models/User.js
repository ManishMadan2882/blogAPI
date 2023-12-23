const mongoose = require('mongoose');

require("../database/connectDB");
//User Scheme 
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true
    },
    bio: {
        type: String
    },
    location: {
        type: String
    },
    imgUrl: {
        type: String,
        default: "https://icons.iconarchive.com/icons/papirus-team/papirus-status/512/avatar-default-icon.png"
    },
    email: {
        type: String,
        unique: 'true'
    },
});


const user = new mongoose.model("User", userSchema);



module.exports = user;

