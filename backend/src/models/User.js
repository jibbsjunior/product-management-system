const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const geocoder = require('../utils/geocode');

const UserSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 6,
        maxlength: 35
    },

    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        // validate(value) {
        //     if (!validator.isEmail(value)) throw new Error("ooops! that's not a valid email addres!");
        // }
    },

    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 8,
        validate(value) {
            if (value.toLowerCase().includes("password")) throw new Error("Please provide a sensible password");
        }
    },

    address: {
        type: String,
        trim: true,
        required: true
    },

    location: {
        type: {
            type: String,
            enum: ['Point']
        },
        coordinates: {
            type: ['Number'],
            index: '2dsphere'
        },
        formattedAddress: String
    }
}, {
    timestamps: true
});

UserSchema.pre('save', async function (next) {
    const user = this;
    if (user.isModified("password")) {
        await bcrypt
            .hash(user.password, 10)
            .then((hash) => user.password = hash)
            .catch((ex) => console.log(ex));
    }

    const loc = await geocoder.geocode(this.address);
    this.location = {
        type: 'Point',
        coordinates: [loc[0].longitude, loc[0].latitude],
        formattedAddress: loc[0].formattedAddress
    }

    this.address = undefined;
    next();
})

module.exports = mongoose.model("User", UserSchema);