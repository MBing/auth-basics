const bcrypt = require('bcrypt'); // TODO: when using bcryptjs you can use async await out of the box
const saltRounds = 10;

const hashPassword = password =>
  new Promise((resolve, reject) => {
    bcrypt.hash(password, saltRounds, (err, hash) => {
      if (err) return reject(err);

      return resolve(hash);
    });
  });

module.exports = { hashPassword };
