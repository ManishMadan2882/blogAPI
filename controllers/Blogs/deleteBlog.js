const Users = require('../../models/User')
const Blogs = require('../../models/Blogs')
const deleteById = async (req, res) => {
  try {

    const blog = await Blogs.findOne({
      _id: req.params.id
    })

    if (req.user.id != blog.author) {
      return res.status(401).json({
        msg: 'Unauthorized'
      }
      )
    }

    await Blogs.deleteOne({
      _id: req.params.id
    });
    res.status(202).json(
      {
        msg: 'Deleted'
      }
    )
  }
  catch (Err) {
    res.status(404).json({ msg: 'Not found', error: Err });
  }
}
module.exports = {
  deleteById
}