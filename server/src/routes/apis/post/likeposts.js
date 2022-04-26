const Post = require('../../../models/posts');

const router = require('express').Router();




// like a post=--------------------------------
router.put("/:id", async (req, res) => {
    const { id } = req.user
    try {
        const post = await Post.findById(req.params.id);
        if (!post.likes.includes(id)) {
            await post.updateOne({ $push: { likes: id } });
            res.status(200).json({
                status: 'success',
                msg: "The post has been liked"
            })
        } else {
            await post.updateOne({ $pull: { likes: id } })
            res.status(200).json({
                status: 'success',
                msg: 'post has been dislikes'
            })
        }
    } catch (error) {
        res.status(500).json({
            status: 'err',
            msg: "here an error"
        })
    }
})



router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id).populate("likes" , "_id name")
        res.status(200).json({
            status: 'success',
            likes:post.likes
        })

    } catch (error) {
        res.status(500).json({
            status: 'err',
            msg: "here an error"
        })
    }
})



module.exports = router;