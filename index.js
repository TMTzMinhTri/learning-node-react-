const express = require('express')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys')

const app = express()
const port = process.env.PORT || 5000

passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, (accessToken, refreshToken, profile, done) => {
        console.log(profile)
    })
)
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/auth/google/callback', passport.authenticate('google', {
    scope:['profile', 'email']
}))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))