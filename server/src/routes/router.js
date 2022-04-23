const router = require('express').Router();

const userRoutes = require('./apis/user/routes')
const postRoutes = require('./apis/post/routes')

router.use('/api', userRoutes)

router.use('/api', postRoutes)

module.exports = router;