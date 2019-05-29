const express = require('express')
const app = express()
const port = process.env.PORT || 5000
//routes
const authRoutes = require('./routes/authRoutes')

//service
require('./service/passport')
require('./service/facebookPassport')

//handle routes
app.use('/auth',authRoutes)



// root
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))