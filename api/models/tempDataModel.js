'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tempSchema = new Schema({
  id: {
    type: String,
  },
  createdDate: {
    type: Date,
    default: Date.now
  },
  data: {
    type: Array,
    default: [999,999,999]
  }
});

module.exports = mongoose.model('tempData', tempSchema);