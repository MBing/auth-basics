const bcrypt = require('bcrypt');
const saltRounds = 10;

const hashPassword = password =>
  new Promise((resolve, reject) => {
    bcrypt.hash(password, saltRounds, (err, hash) => {
      if (err) return reject(err);

      return resolve(hash);
    });
  });

module.exports = { hashPassword };
