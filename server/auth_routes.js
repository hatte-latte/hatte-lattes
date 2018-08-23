const passport = require('passport');

module.exports = app => {
    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );

    app.get('/auth/google/callback',
        passport.authenticate('google'), 
        (req, res) => {
            res.redirect('/shop')
        }
    );

    app.get('/api/logout', (req, res) => {
        req.logout(); //logout added by passport
        res.redirect('/');
    });

    app.get('/api/current_user', (req, res) => {
        res.send(req.user) //req.user generated from cookie session and passport
    });
};
