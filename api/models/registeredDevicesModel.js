'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var registerSchema = new Schema({
  createdDate: {
    type: Date,
    default: Date.now
  },
  device_name: {
    type: String,
    default: 'Unnamed device'
  },
  imei: {
    type: String
  },
  datatype1: {
    type: String,
    default: 'Sensor 1'
  },
  datatype2: {
    type: String,
    default: 'Sensor 2'
  },
  datatype3: {
    type: String,
    default: 'Sensor 3'
  },
  datatype4: {
    type: String,
    default: 'Sensor 4'
  }
});

module.exports = mongoose.model('registerData', registerSchema);