const { clientModel } = require('../models');

const addClient = (body) => {
  //arrow function
  const doc = new clientModel(body); //convert json to model
  const query = { _id: doc._id };
  return clientModel.findOneAndUpdate(query, doc, {
    upsert: true, //add new data and it doesn't add new record without upsert
    new: true, //new updated data, latest record return
  });
};
//for update client
const updateClient = (body) => {
  //arrow function
  const query = { _id: body._id };
  return clientModel.findOneAndUpdate(query, body, {
    //query as where in sql and body as data
    new: true, //new updated data, latest record return
  });
};
//for delete user
const deleteClient = (filter) => {
  //arrow function
  return clientModel.deleteOne(filter);
};
//for one user
const getClient = (filter) => {
  //arrow function
  return clientModel.findOne(filter);
};
//get all users
const getAllClient = (filter) => {
  //arrow function
  return clientModel.find(filter);
};

module.exports = {
  addClient,
  updateClient,
  deleteClient,
  getClient,
  getAllClient,
};
