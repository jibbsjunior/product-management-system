const express = require('express');
const mg = require('morgan');
const connect = require('./src/db/connection');


const app = express();
const PORT = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(mg("dev"));



app.listen(PORT, () => {
    console.log(`Server currently running on port ${PORT}`);
});