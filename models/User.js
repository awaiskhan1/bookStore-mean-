var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    name: String,
    username: { type : String , unique : true, required : true },
    email: { type : String , unique : true, required : true },
    password: String,
    phone: String,
  });

  module.exports = mongoose.model('users', UserSchema);
