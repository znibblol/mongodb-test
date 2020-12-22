const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
require('dotenv').config();
const prodRouter = require('./api/routes/product');
const mongoose = require('mongoose');
const cors = require('cors');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

mongoose.connect(process.env.DB_CONNECT_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

app.use('/api/products', prodRouter);

app.listen(PORT, () => {
    console.log('Server is now listening on port: ' + PORT);
});