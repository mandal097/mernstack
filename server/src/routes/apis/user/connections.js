const router = require('express').Router();
const User = require('../../../models/user');

router.get('/followings', async (req, res) => {
    try {
        const user = await User.findById({ _id: req.user.id }).populate('followings', "_id name")
        res.status(200).json({
            status: 'success',
            followings:user.followings
        })
    } catch (error) {
        res.status(501).json({
            status: 'err',
            msg: `Server error-${error} `
        })
    }
})



router.get('/followers', async (req, res) => {
    try {
        const user = await User.findById({ _id: req.user.id }).populate('followers', "_id name")
        res.status(200).json({
            status: 'success',
            followers:user.followers
        })
    } catch (error) {
        res.status(501).json({
            status: 'err',
            msg: `Server error-${error} `
        })
    }
})

module.exports = router;
