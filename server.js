var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  tempData = require('./api/models/tempDataModel'), //created model loading here
  motionData = require('./api/models/registeredDevicesModel'), //created model loading here
  bodyParser = require('body-parser');
  
app.use(express.static(__dirname+'/public'));

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/sensorDataDB'); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/tempDataRoutes'); //importing route
routes(app); //register the route

var routes = require('./api/routes/registeredDevicesRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('IoT Sensor RESTful API server started on: ' + port);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});