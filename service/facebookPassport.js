const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy
const keys = require('../config/keys')

passport.use(new FacebookStrategy({
    clientID: keys.facebookID,
    clientSecret: keys.facebookSecret,
    callbackURL: "http://localhost:5000/auth/facebook",
    profileFields: ['id', 'displayName', 'photos', 'email'],
    enableProof: true
  },
  function(accessToken, refreshToken, profile, cb) {
   console.log(profile)
   console.log(accessToken)
  }
));