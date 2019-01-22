const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const Game = require('../models/game.model');
// const _Comment = require('../models/comment.model');
// const User = require('../models/user.model');

let PlayedGameSchema = new Schema({
   // game: {type: Game},
   isWinner: {type: Boolean, required: true},
   date: {type: Date, default: Date.now},
   // comments: {type: [_Comment]},
   // opponent_comment: {type: _Comment},
   // opponent: {type: User}
});


// Export the model
module.exports = mongoose.model('PlayedGame', PlayedGameSchema);