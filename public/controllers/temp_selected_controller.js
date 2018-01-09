  var myApp = angular.module('myApp');

  myApp.controller('temp_selected_controller', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
  console.log('TempSelectedController loaded from temp_selected_controller.js...');
      $scope.getSelectedDate = function(){
      
      document.getElementById('search-button').onclick = function () {
      search_date=document.getElementById('selected-date').value;
      imei=document.getElementById('imei').value;
      console.log(imei);
      location.href = "#!/tempfigure/"+imei+"/"+search_date;
    };
  };
}])



