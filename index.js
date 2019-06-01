const express = require('express')
const mongoose = require('mongoose')
const keys = require('./config/keys')
//service
require('./service/passport')
require('./service/facebookPassport')
require('./models/User')

mongoose.connect(keys.mongoDBConnectionString)
//routes
const authRoutes = require('./routes/authRoutes')

const app = express()
//handle routes
app.use('/auth',authRoutes)



// root
app.get('/', (req, res) => res.send('Hello World!'))

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))