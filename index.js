const express = require('express');
// import express from 'express';       < This only post ES 2015?
const app = express();
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

passport.use(new GoogleStrategy());


const PORT = process.env.PORT || 5000;
app.listen(PORT);
