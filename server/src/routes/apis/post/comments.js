const Post = require('../../../models/posts');

const router = require('express').Router();


// for commenting on Post----------------
router.put('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        const comment = {
            text: req.body.text,
            commentedBy: req.user.id
        }
        const updatedPost = await post.updateOne({
            $push: { comments: comment }
        })

        res.status(201).json({
            status: 'success',
            msg: "Commented Successfully",
        })

    } catch (error) {
        res.status(500).json({
            status: 'err',
            msg: "here an error"
        })
    }
})

// for get the comments----------------------
router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id).populate("comments.commentedBy", "_id name")
        res.status(201).json({
            status: 'success',
            msg: "fetched Successfully",
            commentedBy: post
        })

    } catch (error) {
        res.status(500).json({
            status: 'err',
            msg: "here an error"
        })
    }
})



module.exports = router;