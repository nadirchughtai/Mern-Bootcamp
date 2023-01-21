const mongoose = require('mongoose'); //mongoose is a package and schema is constructor.
//schema is constructor
//table columns are in schema
//must be two roles for client and admin
const clientSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    dob: {
      type: Date,
      required: true,
    },
  },
  {
    //defines the name of models
    collection: 'client', //optional flag
    //users are the name of table
  }
);
module.exports = mongoose.model('client', clientSchema);
