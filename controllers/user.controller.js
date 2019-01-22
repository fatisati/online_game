const User = require('../models/user.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    let user = new User(
        {
            email: 'hi', password: '123', name: 'hi',
            family_name: 'hi', username: 'hi',
            comments: [{ content: 'commnets' }]
        }
    )
    user.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send(user)
    })

};

exports.signup = function (req, res) {
    let new_user = new User(
        {
            name: req.body.name,
            family_name: req.body.family_name,
            username: req.body.username,
            email: req.body.email,
            password: req.body.psw,
            birth_date: req.body.birth_date,
            gender: req.body.gender
        }
    );
    // console.log('pass is: ------', user.psw)
    User.findOne({ username: req.body.username }, function (err, u) {
        if (err) {
            res.send(err)
        }
        if (u) {
            res.send('user already exist')
        }
        else {
            new_user.save(function (err) {
                if (err) {
                    return next(err);
                }
                req.session.id = user.id
                res.render('profile', { user: new_user })
            })
        }
    })
};

exports.get_user = function (req, res) {

    // console.log('pass is: ------', user.psw)
    User.findOne({ username: req.session.username }, function (err, u) {
        if (err) {
            res.send(err)
        }
        if (u) {
            res.render('profile', { user: u })
        }

    })
};

exports.all_users = function (req, res) {
    User.find({}, function (err, db_users) {
        if (err) return next(err);
        // res.send(games)
        res.render('all_users', { users: db_users });
    })
};

exports.get_edit_profile = function (req, res) {

    // console.log('pass is: ------', user.psw)
    // res.send(req.session.username)
    User.findOne({ username: req.session.username }, function (err, u) {
        if (err) {
            res.send(err)
        }
        if (u) {
            res.render('edit_profile', { user: u })
        }

    })
};

exports.edit_profile = function (req, res) {
    // console.log('pass is: ------', user.psw)
    User.update({ username: req.body.username }, {
        $set: {
            name: req.body.name,
            family_name: req.body.family_name,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        }
    }, function (err, product) {
        if (err) return next(err);
        res.redirect('/profile');
    })
};

exports.signout = function (req, res) {
    // console.log('pass is: ------', user.psw)
    User.update({ username: req.session.username }, {
        $set: {
            isOnline: false
        }
    }, function (err) {
        if (err) return next(err);
        else {
            req.session.username = null
            res.redirect('/login')
        }
    })
};

exports.login = function (req, res) {
    // console.log('pass is: ------', user.psw)
    User.findOne({ username: req.body.username }, function (err, u) {
        if (err) {
            res.send(err)
        }
        if (u) {

            if(u.password == req.body.password){
                req.session.username = u.username

                User.update(u, {$set: {isOnline: true}}, function(err){
                    if(err) res.send(err)
                    else{
                        res.redirect('/profile')
                        
                    }
                })
            }
            else{
                res.send('wrong password!')
            }
        }

    })
};