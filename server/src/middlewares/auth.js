const jwt = require('jsonwebtoken')


const auth = (req, res, next) => {
    const authHeader = req.headers.token;
    if (authHeader) {

        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {

            if (err) res.status(403).json({
                status: 'err',
                msg: 'Invalid Token!'
            });
            req.user = user;
            next();
        })
    } else {
        return res.status(401).json({
            status: 'err',
            msg: 'You must have to logged in'
        })
    }
}

module.exports = auth;


















