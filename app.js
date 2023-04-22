const express = require('express');
const app = express();
require('dotenv').config();
//async errors
//Setting up JSON middleware
app.use(express.json());
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');


//Routes
app.get('/', (req, res)=> {
    res.send("Hello world!");
})
