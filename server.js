const express = require('express');
const dotenv = require('dotenv');

const API = '/api/v1/bootcamps';

// routes files
const bootcamps = require('./routes/bootcamps');

// load env variables
dotenv.config({path: './config/config.env'});

const app = express();

// mount routes
app.use(API, bootcamps);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`server is running in ${process.env.NODE_ENV} mode on port ${PORT}`))
