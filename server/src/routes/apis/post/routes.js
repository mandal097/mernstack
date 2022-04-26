const router = require('express').Router();

const auth = require('../../../middlewares/auth')

const post = require('./post')
const getAllPosts = require('./getPost')
const getMyPosts = require('./getMyPosts')
const comments = require('./comments')
const likeposts = require('./likeposts')


router.use('/post', auth, post)

router.use('/post', auth, getAllPosts)

router.use('/post', auth, getMyPosts)

router.use('/post/comments', auth, comments)

router.use('/post/likes', auth, likeposts)


module.exports = router;