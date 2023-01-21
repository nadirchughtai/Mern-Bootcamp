const { userModel } = require('../models');
//we cann't user populate with save method
const addUser = (body) => {
  //arrow function
  //const doc = new userModel(body); //convert json to model
  const doc = new userModel(body);
  const query = { _id: doc._id };
  return userModel.findOneAndUpdate(query, doc, {
    upsert: true, //add new data and it doesn't add new record without upsert
    new: true, //new updated data, latest record return
  });
};

const updateUser = (body) => {
  //arrow function
  const query = { _id: body._id };
  return userModel.findOneAndUpdate(query, body, {
    new: true, //new updated data, latest record return
  });
};
//for delete user
const deleteUser = (filter) => {
  //arrow function
  return userModel.deleteOne(filter);
};
//for one user
const getUser = (filter) => {
  //arrow function
  return userModel.findOne(filter).populate('userType.item');
};
//get all users
const getAllUsers = (filter) => {
  //arrow function
  return userModel.find(filter);
};

module.exports = {
  addUser,
  updateUser,
  deleteUser,
  getAllUsers,
  getUser,
};
