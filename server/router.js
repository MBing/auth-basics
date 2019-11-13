const { signup, signin } = require('./controllers/authentication');
const passport = require('passport');
require('./services/passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = app => {
  app.get('/', requireAuth, (req, res) => {
    res.send({ hi: 'there' });
  });
  app.post('/login', requireSignin, signin);
  app.post('/register', signup);
};
