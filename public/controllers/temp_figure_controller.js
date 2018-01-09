var myApp = angular.module('myApp');

myApp.controller('temp_figure_controller', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
  	console.log('TempFigureController loaded...');

  	$scope.getTempfigure = function(){
      var date = $routeParams.date;
      if(date.length > 1){
        var apiurl="/api/temp/" + date;
      }
      else{
        var apiurl = "/api/temp";
      }

      $http.get(apiurl).then(function(responce){
        localData = responce.data;
        $scope.temps = responce.data;

      var i;
      var j;
      var localtemp = new Array();
      var localhumi = new Array();
      var localmove = new Array();

      var localtempdate = new Array();

      for (i = 0; i<localData.length; i++ ){
          localtemp.push(localData[i].data[0]);
          localhumi.push(localData[i].data[1]);
          localmove.push(localData[i].data[3]);
          localtempdate.push(localData[i].createdDate);
      };

      var json = JSON.stringify(localtempdate);
      console.log("loading json date");

      var dateStr = JSON.parse(json);
      console.log(dateStr);

      var date_formatted = new Array();
      var hours = new Array();
      var minites = new Array();
      var date_updated = new Array();

      for (i = 0; i<dateStr.length; i++){
        date_formatted[i] = new Date(dateStr[i]);
        hours[i] = date_formatted[i].getHours();
        minites[i] = date_formatted[i].getMinutes();
        date_updated[i] = hours[i] + ":" + minites[i];
      };

      var tempchart = document.getElementById('tempchart').getContext('2d');
      console.log(tempchart);
      Chart.defaults.global.defaultFontFamily = 'Lato';
      Chart.defaults.global.defaultFontSize = 18;
      Chart.defaults.global.defaultFontColor = '#777';

      var TempChart = new Chart(tempchart, {
        type:'line', 
        data:{
          
          labels: date_updated,
          datasets:[{
            label:'Temperture',
            data: localtemp,
            
            backgroundColor:[
              
              'rgba(255, 199, 132, 0.6)'
            ],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
          }]
        },
        options:{
          title:{
            display:true,
            text:'Temperture in room',
            fontSize:25
          },
          legend:{
            display:true,
            position:'right',
            labels:{
              fontColor:'#000'
            }
          },
          layout:{
            padding:{
              left:50,
              right:0,
              bottom:0,
              top:0
            }
          },
          tooltips:{
            enabled:true
          },
          scales:{
            yAxes:[{
              ticks:{
                beginAtZero: true
              }
            }]
          }
        }
      });
    })
  };
}])


