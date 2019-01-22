const Game = require('../models/game.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the game controller!');
};

exports.create_game_get = function (req, res) {
    res.render('create_game');
};

exports.create_game = function (req, res) {
    let game = new Game(
        {
            max_score: req.body.max_score,
            hold_num: req.body.hold_num,
            dice_num: req.body.dice_num,
            max_dice_roll: req.body.max_dice_roll
        }
    );

    game.save(function (err) {
        if (err) {
            return next(err);
        }
        res.redirect('/all_games')
    })
};

exports.get_game = function (req, res) {
    Game.findById(req.session.game_id, function (err, db_game) {
        if (err) return next(err);
        // res.send(db_game)
        res.render('game', { game: db_game });
    })
};

exports.all_games = function (req, res) {
    Game.find({}, function (err, db_games) {
        if (err) return next(err);
        // res.send(games)
        res.render('all_games', { games: db_games });
    })
};

exports.commet_game = function (req, res) {
    Game.update({ id: req.session.game_id }, { $push: { comments: req.body.comment } }, function (err) {
        if (err) res.send(err)

        res.send('comment added.')
    })
};