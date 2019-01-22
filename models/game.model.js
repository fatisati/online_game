const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = require('../models/user.model');
const _Comment = require('../models/comment.model');

let GameSchema = new Schema({
    max_score: {type: Number, required: true, max: 500},
    hold_num: {type: Number, required: true, max: 500},
    dice_num: {type: Number, required: true, max: 4},
    max_dice_roll: {type: Number, required: true, min: 1},

    mean_score: {type: Number, default: 0},
    online_num: {type: Number, default: 0},
    date: { type: Date, default: Date.now },
    play_num: {type: Number, default: 0},

    creator: {type: String, default: 'fatemeh'},
    comments: {type: [String]}
    // creator: {type: User, required: true},
    // comments: {type: [_Comment]}
});


// Export the model
module.exports = mongoose.model('Game', GameSchema);