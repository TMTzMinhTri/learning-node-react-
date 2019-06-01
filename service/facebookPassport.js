const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy
const keys = require('../config/keys')

passport.use(new FacebookStrategy({
    clientID: keys.facebookID,
    clientSecret: keys.facebookSecret,
    callbackURL: "http://localhost:5000/auth/facebook/callback",
    profileFields:["name", "email", "link", "locale", "timezone"],
    passReqToCallback: true,
    enableProof:false
  },
  function(req,accessToken, refreshToken, profile, cb) {
   console.log(profile)
   console.log(cb)
  }
));