const router = require('express').Router();

const auth = require('../../../middlewares/auth')

const createPost = require('./createPost')
const getAllPosts = require('./getPost')
const getMyPosts = require('./getMyPosts')


router.use('/post', auth, createPost)

router.use('/post', getAllPosts)

router.use('/post', auth, getMyPosts)


module.exports = router;