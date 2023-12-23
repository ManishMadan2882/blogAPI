const Blogs = require('../../models/Blogs')
const createBlog = async (req, res) => { //create a new blog
    const { title, content, imgUrl } = req.body;
    const userId = req.user.id;// added by the authenticate middlware
    const newbie = new Blogs({
        title,
        content,
        author:userId,
        imgUrl
    })
    await newbie.save()
    res.json({ msg: 'Created', id: newbie._id })

}
module.exports = {
    createBlog
}