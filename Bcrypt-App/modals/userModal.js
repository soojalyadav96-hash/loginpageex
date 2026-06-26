const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: String,
  role:{
    type:String,
    enum:["user","admin"],
    deafult:"user"
  },
  password: {
    type: String,
    require: true,
  },

});

module.exports = mongoose.model("User",UserSchema)
