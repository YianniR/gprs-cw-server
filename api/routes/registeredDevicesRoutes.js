module.exports = function(app) {
  var sensorData = require('../controllers/registeredDevicesController');

  app.route('/api/registered_devices')
    .get(sensorData.list_all_sensorData)
    .post(sensorData.create_sensorData);

  app.route('/api/registered_devices/:sensorDataCreatedDate')
    .get(sensorData.readbyDate_sensorData)

};
