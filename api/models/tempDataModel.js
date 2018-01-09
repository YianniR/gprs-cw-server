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
  },
  datatypes: {
    type: Array,
    default: ['T','P','H']
  }
});

module.exports = mongoose.model('tempData', tempSchema);