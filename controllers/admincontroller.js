const { adminModel } = require('../models');

const addAdmin = (body) => {
  //arrow function
  const doc = new adminModel(body); //convert json to model
  const query = { _id: doc._id }; //: is sama as =
  return adminModel.findOneAndUpdate(query, doc, {
    upsert: true, //add new data and it doesn't add new record without upsert
    new: true, //new updated data, latest record return
  });
};

const updateAdmin = (body) => {
  //arrow function
  const query = { _id: body._id };
  return adminModel.findOneAndUpdate(query, body, {
    new: true, //new updated data, latest record return
  });
};
//for delete user
const deleteAdmin = (filter) => {
  //arrow function
  return adminModel.deleteOne(filter);
};
//for one user
const getAdmin = (filter) => {
  //arrow function
  return adminModel.findOne(filter);
};
//get all users
const getAllAdmin = (filter) => {
  //arrow function
  return adminModel.find(filter);
};

module.exports = {
  addAdmin,
  updateAdmin,
  deleteAdmin,
  getAdmin,
  getAllAdmin,
};
