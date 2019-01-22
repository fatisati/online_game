const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = require('../models/user.model');

let CommentSchema = new Schema({
    content: {type: String, required: true},
    isApproved: {type: Boolean, default: false},
    // user: {type: User}
});


// Export the model
module.exports = mongoose.model('Comment', CommentSchema);