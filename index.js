const express = require('express');
// import express from 'express';       < This only post ES 2015?
const app = express();

app.get('/', (req, res) => {
  res.send({ shoulder: 'shrug'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
