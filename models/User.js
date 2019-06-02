const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
    googleId: String,
    name: {
        familyName: String,
        givenName: String
    },
    email: String,
    displayName: String,
    avata: String,
    username: String
})

mongoose.model('users', userSchema)