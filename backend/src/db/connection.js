const mongoose = require('mongoose');

const connect = mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,
    // useCreateIndex: true
}, (err, res) => {
    if (err) return console.log("Failed to establish a connection to mongodb", err);
    console.log("Connection to MongoDB succeeded!");
});

module.exports = connect;