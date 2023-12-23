const Blogs = require('../../models/Blogs')
const updateById = async (req,res)=>{
    try{
     const blog = await Blogs.findOne({_id:req.params.id})
     if(blog.author === req.user.id)
     {
      await Blogs.updateOne({
        _id : req.params.id
      },
      {
        $set :{
          title : req.body.title,
          imgUrl : req.body.imgUrl,
          content : req.body.content
        }
      })
      res.json({msg : 'Updated',id:req.params.id})
     }
     else
     res.status(401).json({msg:"Unauthorized"})
   
    }
    catch(err){
      res.json({msg : 'Something Went Wrong '+err})
    }
  }

  module.exports = {
    updateById
  }