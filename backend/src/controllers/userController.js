const User = require('../models/User');
const axios = require('axios');

const signup = async (req, res, next) => {
    try {
        
        const { data } = await axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=lagos&key=${process.env.GOOGLE_API_KEY}`)
        res.json(data);
        
    } catch (ex) {
        next(ex);
    }

    // User.findOne({ email: req.body.email }, async (err, user) => {
    //     if (err) return res.status(400).json({ msg: "whooops! user already exist" });

    //     const newUser = new User({
    //         name: req.body.name,
    //         email: req.body.email,
    //         password: req.body.password
    //     });
    // })
}

const login = (req, res) => {

}

module.exports = {
    signup,
    login
}