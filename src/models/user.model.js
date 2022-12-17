const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {type: String, required: true},
  mobile : {type: Number, required: true},
  email: { type: String, required: true },
  school: {type: String},
  class: {type: String},
  interset : {type: String}
});

const User = mongoose.model("user", userSchema);

module.exports = User;