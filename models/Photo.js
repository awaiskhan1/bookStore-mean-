var mongoose = require('mongoose');
var PhotoSchema = new mongoose.Schema({ img: 
  { data: Buffer, contentType: String }
});

  module.exports = mongoose.model('photos', PhotoSchema);