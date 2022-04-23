const router = require('express').Router();
const auth = require('../../../middlewares/auth')


const registration = require('./register')
const login = require('./login')
const getUser = require('./getUser')

router.use('/user', registration)

router.use('/user', login)

router.use('/user',auth,  getUser)

module.exports = router;