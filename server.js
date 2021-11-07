const express = require('express');
const dotenv = require('dotenv');

// load env variables
dotenv.config({path: './config/config.env'});

const app = express();

app.get('/api/v1/bootcamps', (req, res) => {
    res
      .status(200)
      .json({ success: true, msg: 'Show all the bootcamps' });
})

app.get('/api/v1/bootcamps/:id', (req, res) => {
    res
      .status(200)
      .json({ success: true, msg: `Show all single bootcamp ${req.params.id}`});
})

app.post('/api/v1/bootcamps/', (req, res) => {
    res
      .status(200)
      .json({ success: true, msg: `Create a bootcamp`});
})

app.put('/api/v1/bootcamps/:id', (req, res) => {
    res
      .status(200)
      .json({ success: true, msg: `update a bootcamp ${req.params.id}`});
})

app.delete('/api/v1/bootcamps/:id', (req, res) => {
    res
      .status(200)
      .json({ success: true, msg: `delete a bootcamp ${req.params.id}`});
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`server is running in ${process.env.NODE_ENV} mode on port ${PORT}`))
