const express = require('express');
const mg = require('morgan');
const connect = require('./src/db/connection');
const userRouter = require('./src/routes/user');
const productRouter = require('./src/routes/product');


const app = express();
const PORT = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(mg("dev"));
app.use(userRouter);
app.use(productRouter);



app.listen(PORT, () => {
    console.log(`Server currently running on port ${PORT}`);
});