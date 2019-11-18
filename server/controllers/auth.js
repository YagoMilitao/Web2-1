var passport = require('passport');

//funções que mostram mensagens flash para as páginas que estão sendo exibidas

exports.signin = function(req, res) {
    res.render('login', { title: 'Login Page', message: req.flash('loginMessage') });
};

exports.signup = function(req, res) {
    res.render('signup', { title: 'Signup Page', message: req.flash('signupMessage') });

};

exports.profile = function(req, res) {
    res.render('profile', { title: 'Profile Page', user : req.user});
};

//requisição de logout do usuário
exports.logout = function () {
    req.logout();
    res.redirect('/');
};

//se usuário está logado vai para profile se nao vai para login
exports.isLoggedIn = function(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/login');
};
