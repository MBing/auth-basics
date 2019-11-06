const User = require('../models/User');
const signup = (req, res, next) => {
  const { email, password } = req.body;
  // check if user with email exists
  User.findOne({ email: email }, (err, matchingUser) => {
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
        if (err) return next(err)

  // indicate user was created
        res.json({success: true});
    });
  });
};

module.exports = { signup };
