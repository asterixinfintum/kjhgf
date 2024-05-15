"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var messageSchema = new Schema({
  number: {
    type: String,
    required: true
  },
  textvalue: {
    type: String,
    "default": ''
  }
});
var Message = mongoose.model('Message', messageSchema);
module.exports = Message;