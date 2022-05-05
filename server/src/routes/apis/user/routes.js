const router = require('express').Router();
const auth = require('../../../middlewares/auth')


const registration = require('./auth/register')
const login = require('./auth/login')
const getUser = require('./getUser')
const getProfile = require('./getProfile')
const followUsers = require('./followUsers')
const updateProfile = require('./auth/updateProfile')
const deleteUser = require('./auth/deleteUser')
const resetPassword = require('./auth/resetPassword')
const forgotPassword = require('./auth/forgotPassword')
const followers = require('./connections')
const searchUser = require('./searchUser')



router.use('/user', registration)

router.use('/user', login)

router.use('/user', getProfile)

router.use('/user', forgotPassword)

router.use('/user/search', searchUser)

router.use('/user', auth, getUser)

router.use('/user/update', auth, updateProfile)

router.use('/user/delete', auth, deleteUser)

router.use('/user/reset-password', auth, resetPassword)

router.use('/user', auth, followUsers)

router.use('/user/connections', auth, followers)

module.exports = router;