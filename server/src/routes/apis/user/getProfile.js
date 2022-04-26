const router = require('express').Router();
const User = require('../../../models/user');

router.get('/profile/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById({ _id:id }).select('-password');
        if (!user) {
            res.status(404).json({
                status: 'err',
                msg: `User not found `
            })
        } else {
            res.status(200).json({
                status: 'success',
                msg: 'User found',
                user: user
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