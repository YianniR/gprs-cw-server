'use strict';

var mongoose = require('mongoose'),
  sensorData = mongoose.model('registerData');

exports.list_all_sensorData = function(req, res) {
  sensorData.find({}, function(err, sensorData) {
    if (err)
      res.send(err);
    res.json(sensorData);
  });
};

exports.readbyIMEI_sensorData = function(req,res){
  sensorData.find({}, function(err, sensorData) {
    if (err)
      res.send(err);
    var search_data = sensorData.filter(function(value){
      var query_imei = req.params.imei;
      var data_imei = value.imei;
      if(query_imei==data_imei){
        return true;
      }
    })
    res.json(search_data);
  });
};

exports.create_sensorData = function(req, res) {
  var new_sensorData = new sensorData(req.body);
  console.log(req)
  new_sensorData.save(function(err, sensorData) {
    if (err)
      res.send(err);
    res.json(sensorData);
  });
};
