const {
  usersControllers,
  adminControllers,
  clientControllers,
} = require('../controllers');

const signup = async (body) => {
  //apply validation
  // console.log(signup);
  if (!body.userName) {
    //for exceptions handling
    //two callbacks in promises is reject or resolve
    return Promise.reject({ error: 'userName is required' });
  }
  if (!body.password) {
    return Promise.reject({ error: 'password is required' });
  }
  if (!body.userType) {
    return Promise.reject({ error: 'userType is required' });
  }
  if (!body.data) {
    return Promise.reject({ error: 'data is required' });
  }
  try {
    //var is used for global
    //let is locally variable
    let result = null;
    const userType = body.userType;

    switch (userType) {
      //apply admin validation fields here
      case 'admin':
        if (!body.data.firstName) {
          return Promise.reject({ error: 'First Name is required' });
        }
        if (!body.data.lastName) {
          return Promise.reject({ error: 'Last Name is required' });
        }
        result = await adminControllers.addAdmin(body.data);
        //console.log(result);
        break;
      case 'client':
        //apply client validation fields here
        if (!body.data.firstName) {
          return Promise.reject({ error: 'First Name is required' });
        }
        if (!body.data.lastName) {
          return Promise.reject({ error: 'Last Name is required' });
        }
        if (!body.data.age) {
          return Promise.reject({ error: 'Age is required' });
        }
        if (!body.data.dob) {
          return Promise.reject({ error: 'Date of Birth is required' });
        }
        result = await clientControllers.addClient(body.data);
        console.log(result);
        break;
      default:
        return Promise.reject({ error: 'userType is invalid' });
    }
    //public information attached with authentication
    const userJson = {
      userName: body.userName,
      password: body.password, //make this password encr
      userType: {
        kind: userType,
        item: result._id,
      },
    };
    const user = await usersControllers.addUser(userJson);
    // console.log(user);
    //if you want to send email to user then you should this block
    return user;
  } catch (ex) {
    return Promise.reject({ error: ex });
  }
};

module.exports = {
  signup,
};
