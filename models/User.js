const { mongoose, model } = require('../config/db-connection');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
    min: 5,
  },
});

module.exports = mongoose.model('User', userSchema);
