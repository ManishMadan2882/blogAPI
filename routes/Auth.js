const express = require('express');
const route = express.Router();

const {  loginUser, registerUser, getUser } = require('../controllers/Auth/Auth');
const authenticateToken = require('../middleware/authenticate');

 
route.post('/login',loginUser);
route.post('/register',registerUser,loginUser)
route.get('/user',authenticateToken,getUser)


module.exports = route