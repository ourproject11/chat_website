const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    friends: [{
        type: Schema.ObjectId, ref:"User"
    }]

}, {timestamps: true})

const User = mongoose.model('User', userSchema);

module.exports = User;