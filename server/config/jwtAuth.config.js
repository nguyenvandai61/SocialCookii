
var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
var UserService = require('../services/user.service');

module.exports = function (passport) {
        
    console.log("LocalStrategy called");
    var opts = {}
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = 'secret';
    // opts.issuer = 'accounts.examplesoft.com';
    // opts.audience = 'yoursite.net';

    passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
        console.log('payload received', jwt_payload);
        UserService.getUserById(jwt_payload.id).then((user, err) => {
            if (err) {
                return done(err, false);
            }
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
                // or you could create a new account
            }
        });
    }));
}