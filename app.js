const express = require('express');
const app = express();
require('dotenv').config();
//async errors
//Setting up JSON middleware
app.use(express.json());

