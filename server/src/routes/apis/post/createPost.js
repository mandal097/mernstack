const Post = require('../../../models/posts');

const router = require('express').Router();


router.post('/create-post', async (req, res) => {
    const { title, body, photo } = req.body;
    try {
        if (!title || !body) {
            res.status(404).json({
                status: 'err',
                msg: 'Please add all fields'
            })
        } else {
            const { id } = req.user;
            const post = await Post({
                title,
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

module.exports = router;