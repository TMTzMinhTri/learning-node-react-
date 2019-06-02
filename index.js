const express = require('express')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')
const keys = require('./config/keys')
//service
require('./models/User')
require('./service/passport')
require('./service/facebookPassport')

const app = express()

mongoose.connect(keys.mongoDBConnectionStringLocalhost)

app.use(cookieSession({
    maxAge: 5*60*1000,
    keys:[keys.cookieKey],
}))
app.use(passport.initialize());
app.use(passport.session());
//routes
const authRoutes = require('./routes/authRoutes')

//handle routes
app.use('/auth',authRoutes)



// root
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/currentUser', (req, res)=> {
    res.send(req.session)
    res.send(req.user)
})
app.get('/logout',(req,res) => {
    req.logOut()
    res.send(req.user)
})

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))