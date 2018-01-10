module.exports = function(app) {
  var sensorData = require('../controllers/registeredDevicesController');

  app.route('/api_registered_devices')
    .get(sensorData.list_all_sensorData)
    .post(sensorData.create_sensorData);

  app.route('/api_registered_devices/:imei')
    .get(sensorData.readbyIMEI_sensorData);

};
