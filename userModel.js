const mongoose = require('mongoose');

const UserData = new mongoose.Schema();

const UserModel =  new mongoose.model("dummy1", UserData);
module.exports = UserModel;
