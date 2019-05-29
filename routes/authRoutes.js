const express = require('express')
const router = express.Router()
const passport = require('passport')


router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}))

router.get('/google/callback',passport.authenticate('google'))

router.get('/facebook',passport.authenticate('facebook',{
    authType: 'rerequest', scope:['user_photos','user_likes','email',]
}))

module.exports = router