const express = require('express');
// import express from 'express';       < This only post ES 2015?
const app = express();
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/kyes')

const app = express();

passport.use
  (new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
  },
    (accessToken) => {
      console.log(accessToken);
    }
  )
);

app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
)

const PORT = process.env.PORT || 5000;
app.listen(PORT);
