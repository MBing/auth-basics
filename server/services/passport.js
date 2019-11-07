const passport = require('passport');
const User = require('../models/User');
const { Strategy, ExtractJwt } = require('passport-jwt');
const LocalStrategy = require('passport-local');

const localOptions = { usernameField: 'email' };
const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
  User.findOne({ email: email }, async (err, user) => {
    if (err) return done(err, false);
    if (!user) return done(null, false);

    try {
      const isMatch = await user.comparePasswords(password, done);

      if (!isMatch) return done(null, false);
    } catch (error) {
      return done(error);
    }

    return done(null, user);
  });
});

const secret = process.env.SESSION_SECRET || 'SECRET';

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('Authorization'),
  secretOrKey: secret,
};

const jwtLogin = new Strategy(jwtOptions, (payload, done) => {
  User.findById(payload.sub, (err, user) => {
    if (err) return done(err);

    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  });
});

passport.use(jwtLogin);
passport.use(localLogin);
