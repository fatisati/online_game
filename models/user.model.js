var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// const _Comment = require('../models/comment.model');
// const Game = require('../models/game.model');
// const User = require('../models/user.model');
// const PlayedGame = require('../models/played_game.model');

var UserSchema = new Schema(
  {
    name: { type: String, required: true },
    family_name: { type: String, required: true },
    email: { type: String, required: true, max: 100 },
    username: { type: String, required: true },
    password: { type: String, required: true, max: 100 },

    isAdmin: { type: Boolean, default: false},
    isOnline: { type: Boolean, default: false },
    mean_score: { type: Number, default: 0 },

    played_games_num: { type: Number, default: 0 },
    // comments: { type: [_Comment] },
    // played_games: { type: [PlayedGame] },
    // designed_games: { type: [Game] },
    // friends: { type: [User] },

    img: { data: Buffer, contentType: String },
    birth_date: { type: Date },
    gender: { type: String, enum: ['male', 'female'] },
    
  }
);

// Export model.
module.exports = mongoose.model('User', UserSchema);
