const Post = require('../../../models/posts');

const router = require('express').Router();

// creating posts ------------------------------
router.post('/create-post', async (req, res) => {
    const { body, photo } = req.body;
    try {
        if (!body) {
            res.status(404).json({
                status: 'err',
                msg: 'Please add all fields'
            })
        } else {
            const { id } = req.user;
            const post = await Post({
                body,
                photo,
                postedBy: id
            })
            await post.save()

            res.status(201).json({
                status: 'status',
                msg: `Post created Successfully `,
                post: post
            })
        }
    } catch (error) {
        res.status(501).json({
            status: 'err',
            msg: `Server error-${error} `
        })
    }
})




// for deleting the Post----------------------
router.delete('/:id', async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id)

        res.status(201).json({
            status: 'success',
            msg: "Deleted  Successfully",
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