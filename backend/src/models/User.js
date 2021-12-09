const mongoose = require('mongoose');
const validator = require('validator');

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
        validate(value) {
            if (!validator.isEmail(value)) throw new Error("ooops! that's not a valid email addres!");
        }
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

    location: {
        type: String,
        trim: true
    }
}, {
    timestamps: true
})