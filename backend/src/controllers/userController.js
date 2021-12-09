const User = require('../models/User');


const signup = (req, res) => {
    User.findOne({ email: req.body.email }, async (err, user) => {
        if (err) return res.status(400).json({ msg: "whooops! user already exist" });

        const newUser = new User({
            name: req.body.name,
            email: req.body.email
        });
    })
}

const login = (req, res) => {

}

module.exports = {
    signup,
    login
}