  var myApp = angular.module('myApp');

  myApp.controller('temp_selected_controller', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
  console.log('TempSelectedController loaded from temp_selected_controller.js...');
      $scope.getSelectedDate = function(){
      
      document.getElementById('search-button').onclick = function () {
      search_date=document.getElementById('selected-date').value;
      imei=document.getElementById('imei').value;

      $http.get('/api_registered_devices').then(function(responce){
        registered_devices_data = responce.data;
        var imei_list = new Array();

        for (i = 0; i<registered_devices_data.length; i++ ){
          imei_list.push(registered_devices_data[i].imei);;
        };

        if(imei_list.includes(imei)!=true){
          alert("This IMEI is not registered!");
        }
        else if(search_date.length<10){
          alert("Please input the date in the format specified!");
          location.href = '#!/';
        }
        else{
          location.href = "#!/tempfigure/"+imei+"/"+search_date;
        }
      });
    };
  };
}])
