const bcrypt = require('bcryptjs');
const saltRounds = 10;

const hashPassword = async password => {
  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(password, salt);

  return hash;
};

const comparePasswords = (candidatePassword, done) => async user =>{
  try {
    const isMatch = await bcrypt.compare(candidatePassword, user.password);
    return done(null, isMatch);
  } catch (err) {
    return done(err);
  }
};

module.exports = { hashPassword, comparePasswords };
