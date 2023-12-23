const Blogs = require('../../models/Blogs');
const getBlogById = async (req, res) => {
    try {

        const blog = await Blogs.findOne({ _id: req.params.id }).populate('author', 'username')
        if (blog == null)
            return res.status(404).json({ msg: 'not found' })

        res.status(200).json(blog)

    }
    catch (err) {
        return res.status(400).json({ msg: 'Something went wrong' })
    }
}
const getAllBlogs = async (req, res) => {
    const data = await Blogs.find().populate('author', 'username');
    res.status(200).json(data);
};

const getPaginatedBlogs = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;

        const startIndex = (page - 1) * limit;

        const posts = await Blogs.find()
            .skip(startIndex)
            .limit(limit)
            .exec();

        res.json(posts);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Internal Server Error'
        }
        );
    }
}

module.exports = { getBlogById, getAllBlogs, getPaginatedBlogs }