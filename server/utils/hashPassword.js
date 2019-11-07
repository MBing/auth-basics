const bcrypt = require('bcrypt'); // TODO: when using bcryptjs you can use async await out of the box
const saltRounds = 10;

const hashPassword = password =>
  new Promise((resolve, reject) => {
    bcrypt.hash(password, saltRounds, (err, hash) => {
      if (err) return reject(err);

      return resolve(hash);
    });
  });

const comparePasswords = function(candidatePassword, done) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) return done(err);

    done(null, isMatch);
  });
};

module.exports = { hashPassword, comparePasswords };
