var myApp = angular.module('myApp');

myApp.controller('register_device_controller', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
  console.log('registerDeviceController loaded...');

  $scope.postDevice = function(){
    document.getElementById('register-button').onclick = function () {
      $http.get('/api_registered_devices').then(function(responce){
        registered_devices_data = responce.data;
        var imei_list = new Array();

        for (i = 0; i<registered_devices_data.length; i++ ){
          imei_list.push(registered_devices_data[i].imei);;
        };

        if(imei_list.includes(document.getElementById('IMEI').value)==true){
          if (confirm("This IMEI is already registered! Do you want to update its details?") == true) {
            var data;
            data={
              device_name: document.getElementById('device-name').value,
              imei: document.getElementById('IMEI').value,
              datatype1: document.getElementById('datatype1').value,
              datatype2: document.getElementById('datatype2').value,
              datatype3: document.getElementById('datatype3').value,
              datatype4: document.getElementById('datatype4').value
            };

            $http.post('/api_registered_devices',data).then(function(responce){
              $scope.temps = responce.data;
            });

            location.href = "#!/register_success";
          }
          else{
            location.href = '#!/'
          }
        } 
        else {
          var data;
          data={
            device_name: document.getElementById('device-name').value,
            imei: document.getElementById('IMEI').value,
            datatype1: document.getElementById('datatype1').value,
            datatype2: document.getElementById('datatype2').value,
            datatype3: document.getElementById('datatype3').value,
            datatype4: document.getElementById('datatype4').value
          };

          $http.post('/api_registered_devices',data).then(function(responce){
            $scope.temps = responce.data;
          });
          location.href = "#!/register_success";
        }
      });
    }
  }

  $scope.getDevices = function(){
    $http.get('/api_registered_devices').then(function(responce){
      $scope.temps = responce.data;
    });
  }

  $scope.getRegisteredDevicesatDate = function(){
    var date = $routeParams.date;
    console.log(date);
    $http.get('/api_registered_devices/' + date).then(function(responce){
      $scope.temps = responce.data;
    });
  }


}]);