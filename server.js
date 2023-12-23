require('dotenv').config();

const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const port = process.env.PORT || 5400;
const app  =  express();

app.use(express.json());
app.use(helmet());

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

const authRoute = require('./routes/Auth');
const blogRoute = require('./routes/Blogs');

app.use('/api/', limiter);

app.use('/api/v1/auth',authRoute);

app.use('/api/v1/blog',blogRoute);

app.listen(port,()=>{
    console.log(`Server up and running  ${port}`);
});