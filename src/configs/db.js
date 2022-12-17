const mongoose = require("mongoose");

// require("dotenv").config();

const connect = () => {
  return mongoose.connect('mongodb://localhost:27017/LMS_user');
};

module.exports = connect;