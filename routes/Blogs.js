const express = require('express');

const route = express.Router();

const authenticateToken = require('../middleware/authenticate');

const { createBlog } = require('../controllers/Blogs/createBlog');
const { updateById } = require('../controllers/Blogs/updateBlog');
const { deleteById } = require('../controllers/Blogs/deleteBlog');
const { getBlogById, getAllBlogs, getPaginatedBlogs } = require('../controllers/Blogs/readBlog');

//protected routes only for authorised access
route.post('/create/',authenticateToken,createBlog);

route.put('/update/:id',authenticateToken, updateById); // id refers to the blog _id

route.delete('/delete/:id',authenticateToken,deleteById);

//public routes
route.get('/',getPaginatedBlogs)

route.get('/all',getAllBlogs);

route.get('/:id',getBlogById);


module.exports = route