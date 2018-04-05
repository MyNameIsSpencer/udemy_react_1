const express = require('express');
// import express from 'express';       < This only post ES 2015?
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

// mongoose.connect(keys.mongoURI);
mongoose.connect(keys.mongoUri, {
  useMongoClient: true
})

const app = express();

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
