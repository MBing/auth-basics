const { hashPassword, comparePasswords } = require('../utils/hashPassword');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String,
});

userSchema.pre('save', async function(next) {
  const user = this;
  user.password = await hashPassword(user.password);

  next();
});

userSchema.methods.comparePasswords = comparePasswords;

module.exports = mongoose.model('user', userSchema);
