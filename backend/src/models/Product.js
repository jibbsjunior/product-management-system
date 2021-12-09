const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minLength: 8,
        maxlength: 20
    },

    details: {
        type: String,
        required: true,
        trim: true,
        minlength: 15,
        maxlength: 50
    },

    location: {
        type: String,
        required: true,
        trim: true
    },

}, {
    timestamps: true
});

module.exports = mongoose.model("Product", ProductSchema);