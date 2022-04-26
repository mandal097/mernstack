const router = require('express').Router();
const User = require('../../../models/user');

router.put('/follow', async (req, res) => {
    const { id } = req.body;
    try {
        //finding friend have to follow 
        const user = await User.findById(id);
        if (!user.followers.includes(req.user.id)) {
            await user.updateOne({ $push: { followers: req.user.id } }, { new: true })

            await User.findByIdAndUpdate({ _id: req.user.id },
                { $push: { followings: req.body.id } }, { new: true })

            res.status(201).json({
                status: "success",
                msg: 'Successfully followed'
            })
        } else {
            res.status(404).json({
                status: 'err',
                msg: `Already in your Followings`
            })
        }




    } catch (error) {
        res.status(501).json({
            status: 'err',
            msg: `Server error-${error} `
        })
    }
})



router.put('/unfollow', async (req, res) => {
    const { id } = req.body;
    try {
        //finding friend have to follow 
        const user = await User.findById(id);
        if (user.followers.includes(req.user.id)) {
            await user.updateOne({ $pull: { followers: req.user.id } }, { new: true })

            await User.findByIdAndUpdate({ _id: req.user.id },
                { $pull: { followings: req.body.id } }, { new: true })

            res.status(201).json({
                status: "success",
                msg: 'Successfully unfollowed'
            })
        } else {
            res.status(404).json({
                status: 'err',
                msg: `Not  in your Followers`
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









                // const followUser = await User.findByIdAndUpdate({ _id: id }, {
                //     $push: { followers: req.user.id }
                // }, { new: true }
                // )
                // if (followUser) {
                //     const followingUser = await User.findByIdAndUpdate({ _id: req.user.id }, {
                //         $push: { followings: req.body.id }
                //     }, { new: true })
                //     res.status(201).json({
                //         status: "success",
                //         msg: 'successfully followed'
                //     })
                // } else {
                //     res.status(501).json({
                //         status: 'err',
                //         msg: `error while following user`
                //     })
                // }