const Post = require('../../../models/posts');

const router = require('express').Router();


router.get('/get-my-all-posts', async (req, res) => {
    try {
        const { id } = req.user;
        const posts = await Post.find({ postedBy: id }).populate('postedBy' , '_id name')
        res.status(200).json({
            status: 'success',
            posts: posts
        })
    } catch (error) {
        res.status(501).json({
            status: 'err',
            msg: `Server error-${error} `
        })
    }
})


module.exports = router;