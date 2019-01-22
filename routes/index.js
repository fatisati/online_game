var express = require('express');
var router = express.Router();

const user_controller = require('../controllers/user.controller');
const game_controller = require('../controllers/game.controller');

router.get('/', function (req, res) {
    res.render('home')
});
router.get('/test', function (req, res) {
    res.render('game_finish', { user: {} })
});

router.get('/admin_home', function (req, res) {
    res.render('admin_home')
});

router.get('/home', function (req, res) {
    res.render('profile')
});


router.get('/signup', function (req, res) {
    res.render('signup')
});
router.post('/signup', user_controller.signup);

router.get('/signout', user_controller.signout);
router.post('/login', user_controller.login);
router.get('/login', function(req, res){
    res.render('login')
});


router.get('/profile/:username', function (req, res) {
    req.session.username = req.params.username
    // res.send(req.session.username)
    res.redirect('/profile')
});
router.get('/profile', user_controller.get_user);
router.get('/edit_profile', user_controller.get_edit_profile);
router.post('/edit_profile', user_controller.edit_profile);
router.get('/all_users', user_controller.all_users);

router.get('/create_game', game_controller.create_game_get);
router.post('/create_game', game_controller.create_game);
router.get('/all_games', game_controller.all_games);
router.get('/game/:id', function (req, res) {
    req.session.game_id = req.params.id
    // res.send(req.session.username)
    res.redirect('/game')
});
router.get('/game', game_controller.get_game);

router.get('/game_finish', function(req, res){
    res.render('game_finish')
});

router.post('/comment_game', game_controller.commet_game);

module.exports = router;
