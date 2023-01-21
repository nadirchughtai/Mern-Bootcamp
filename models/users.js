//import packages
//const { default: mongoose } = require('mongoose');
const mongoose = require('mongoose'); //mongoose is a package and schema is constructor.
const bcrypt = require('bcrypt');
//schema is constructor
//table columns are in schema
//must be two roles for client and admin
const usersSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    password: { type: String, required: true },
    userType: {
      kind: {
        type: String,
        enum: ['admin', 'client'], //static set of values
      },
      item: {
        //for relationship
        type: mongoose.Types.ObjectId, //connect to different models as a primary key
        refPath: 'userType.kind', //referncepath and reference key
      },
    },
  },
  {
    //defines the name of models
    collection: 'users', //optional flag
    //users are the name of table
  }
);



module.exports = mongoose.model('users', usersSchema);
