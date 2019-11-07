const passport = require('passport');
const User = require('../models/User');
const { Strategy, ExtractJwt } = require('passport-jwt');

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('Authorization'),
  secretOrKey: process.env.SESSION_SECRET || 'SECRET',
};

const jwtLogin = new Strategy(jwtOptions, (payload, done) => {
  User.findById(payload.sub, (err, user) => {
    if (err) return done(err, false);
    if (user) return done(null, user);
    done(null, false);
  });
});

passport.use('jwt', jwtLogin);
