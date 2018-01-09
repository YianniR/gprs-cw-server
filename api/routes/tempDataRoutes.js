module.exports = function(app) {
  var sensorData = require('../controllers/tempDataController');

  app.route('/api/temp')
    .get(sensorData.list_all_sensorData)
    .post(sensorData.create_sensorData);

  app.route('/api/temp/:imei/:sensorDataCreatedDate')
    .get(sensorData.readbyDate_sensorData)

};
