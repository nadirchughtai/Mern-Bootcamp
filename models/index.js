//central middleware
const userModel = require('./users');
const adminModel = require('./adminmodel');
const clientModel = require('./clientmodel');

module.exports = {
  userModel,
  adminModel,
  clientModel,
};
