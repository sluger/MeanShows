var mongoose = require('mongoose');


var ShowSchema = new mongoose.Schema({
  title: String,
  rated: Number
});

mongoose.model('Show', ShowSchema);
