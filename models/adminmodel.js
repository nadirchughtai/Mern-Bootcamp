const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  {
    //defines the name of models
    collection: 'admin', //optional flag
    //users are the name of table
  }
);
module.exports = mongoose.model('admin', adminSchema);
