'use strict';

var mongoose = require('mongoose'),
  sensorData = mongoose.model('tempData');

exports.list_all_sensorData = function(req, res) {
  sensorData.find({}, function(err, sensorData) {
    if (err)
      res.send(err);
    res.json(sensorData);
  });
};

exports.readbyDate_sensorData = function(req,res){
  sensorData.find({}, function(err, sensorData) {
    if (err)
      res.send(err);
    var search_data = sensorData.filter(function(value){

      var query_date = new Date(req.params.sensorDataCreatedDate);
      var data_date = new Date(value.createdDate);
      return data_date.getDate()==query_date.getDate();
    })
    res.json(search_data);
  });
}

exports.create_sensorData = function(req, res) {
  var new_sensorData = new sensorData(req.body);
  new_sensorData.save(function(err, sensorData) {
    if (err)
      res.send(err);
    res.json(sensorData);
  });
};
