const jwt = require('jwt-simple');
const User = require('../models/User');

// Instead of using a config file, you should use .env file
const secret = process.env.SESSION_SECRET || 'SECRET';

const tokenForUser = user => {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, secret);
};

const signup = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(422)
      .send({ error: 'You must provide email and password!' });
  }
  // TODO: add proper validation for the email

  // check if user with email exists
  User.findOne({ email: email }, async (err, matchingUser) => {
    if (err) return next(err);

    // return error if email exists
    if (matchingUser) {
      return res.status(422).send({ error: 'Email is in use!' });
    }

    const user = new User({
      email,
      password,
    });

    // save if no user there already
    user.save(err => {
      if (err) return next(err);

      // indicate user was created
      res.json({ token: tokenForUser(user) });
    });
  });
};

module.exports = { signup };
