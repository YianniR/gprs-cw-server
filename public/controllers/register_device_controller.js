var myApp = angular.module('myApp');

myApp.controller('register_device_controller', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
  console.log('registerDeviceController loaded...');

  $scope.postDevice = function(){
    document.getElementById('register-button').onclick = function () {
      var data;
      data={
        device_name: document.getElementById('device-name').value,
        imei: document.getElementById('IMEI').value,
        datatype1: document.getElementById('datatype1').value,
        datatype2: document.getElementById('datatype2').value,
        datatype3: document.getElementById('datatype3').value

      };
      console.log(data)
      $http.post('/api/registered_devices',data).then(function(responce){
        $scope.temps = responce.data;
      });

      location.href = "#!/register_success";

    }
  }

  $scope.getDevices = function(){
    $http.get('/api/registered_devices').then(function(responce){
      $scope.temps = responce.data;
    });
  }

  $scope.getRegisteredDevicesatDate = function(){
    var date = $routeParams.date;
    console.log(date);
    $http.get('/api/registered_devices/' + date).then(function(responce){
      $scope.temps = responce.data;
    });
  }


}]);