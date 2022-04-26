const router = require('express').Router();
const User = require('../../../../models/user');
const Otp = require('../../../../models/otp');
const sendOtpMail = require('../../../../helpers/sendOtp');
const bcrypt = require('bcryptjs');

router.post('/send-otp', async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ email })
        if (!user) {
            res.json({
                status: 'err',
                code: 2,
                msg: 'User not found'
            })
        } else {
            let number = Math.floor(1000 + Math.random() * 9000);
            const saveOtp = new Otp({
                email: email,
                otp: number,
                expireIn: new Date().getTime() + 300 * 1000
            })

            await saveOtp.save()
            sendOtpMail(email ? email : user.email, user.name, number)

            res.json({
                status: 'success',
                msg: 'Please check your email',
                data: saveOtp
            })

        }

    } catch (error) {
        res.status(501).json({
            status: 'err',
            code: 1,
            msg: error.message
        })
    }
})





router.post('/forgot-password', async (req, res) => {
    const { email, otp, password } = req.body;
    try {
        let data = await Otp.findOne({ email, otp });
        if (data) {
            let currentTime = new Date().getTime();
            let diffTime = data.expireIn - currentTime;
            if (diffTime < 0) {
                res.status(404).json({
                    status: 'err',
                    msg: 'Otp Expires'
                })

            } else {

                const passwordHash = await bcrypt.hashSync(password, 10)
                let user = await User.findOneAndUpdate({ email: email }, {
                    password: passwordHash
                })
                console.log(user);
                res.status(201).json({
                    status: 'success',
                    msg: "Password Changed successfully"
                })
            }
        } else {
            res.status(404).json({
                status: 'err',
                msg: "Wrong Otp"
            })

        }
    } catch (error) {
        res.status(501).json({
            status: 'err',
            code: 1,
            msg: error.message
        })
    }
})









module.exports = router;