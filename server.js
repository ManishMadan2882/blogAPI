require('dotenv').config()
const express = require('express')
const path = require('path')
const port = 5400
const app  =  express()
app.use(express.json())
const authRoute = require('./routes/Auth')
app.use('/api/v1/auth',authRoute)

app.listen(port,()=>{
    console.log("Server up and running " + port);
})