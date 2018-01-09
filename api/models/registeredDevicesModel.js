'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var registerSchema = new Schema({
  createdDate: {
    type: Date,
    default: Date.now
  },
  device_name: {
    type: String
  },
  imei: {
    type: String
  }
});

module.exports = mongoose.model('registerData', registerSchema);