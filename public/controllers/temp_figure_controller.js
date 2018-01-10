var myApp = angular.module('myApp');

myApp.controller('temp_figure_controller', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
  	console.log('TempFigureController loaded...');

  	$scope.getTempfigure = function(){
      var date = $routeParams.date;
      var imei = $routeParams.id;

      $http.get('/api_registered_devices').then(function(responce){
        registered_devices_data = responce.data;
        
        var imei_list = new Array();

        for (i = 0; i<registered_devices_data.length; i++ ){
          imei_list.push(registered_devices_data[i].imei);;
        };

        if(imei_list.includes(imei)!=true){
          location.href = "#!/not_registered";
        }
        var apiurl_device='/api_registered_devices/'+imei
        
        $http.get(apiurl_device).then(function(responce){
          device_data = responce.data;
          console.log('Device data:');
          console.log(device_data);
          latest_device_data=device_data[device_data.length-1];
          
          if(date.length > 1){
            var apiurl_data="/api_data/" + imei + "/"+ date;
          }
          else{
            var apiurl_data = "/api_data/"+imei;
          }

          $http.get(apiurl_data).then(function(responce){
            localData = responce.data;
            $scope.temps = responce.data;

          var i;
          var localtemp = new Array();
          var localhumi = new Array();
          var localmove = new Array();

          var localtempdate = new Array();

          for (i = 0; i<localData.length; i++ ){
              localtemp.push(localData[i].data[0]);
              localhumi.push(localData[i].data[1]);
              localmove.push(localData[i].data[2]);
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
          var humichart = document.getElementById('humichart').getContext('2d');
          var movechart = document.getElementById('movechart').getContext('2d');

          console.log(tempchart);
          Chart.defaults.global.defaultFontFamily = 'Lato';
          Chart.defaults.global.defaultFontSize = 18;
          Chart.defaults.global.defaultFontColor = '#777';

          var TempChart = new Chart(tempchart, {
            type:'line', 
            data:{
              
              labels: date_updated,
              datasets:[{
                label:latest_device_data.datatype1,
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
                text:latest_device_data.datatype1 +' from ' + latest_device_data.device_name,
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

          var HumiChart = new Chart(humichart, {
            type:'line', 
            data:{
              
              labels: date_updated,
              datasets:[{
                label:latest_device_data.datatype2,
                data: localhumi,
                
                backgroundColor:[
                  
                  'rgba(100, 200, 255, 0.6)'
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
                text:latest_device_data.datatype2 +' from ' + latest_device_data.device_name,
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

          var MoveChart = new Chart(movechart, {
            type:'line', 
            data:{
              
              labels: date_updated,
              datasets:[{
                label:latest_device_data.datatype3,
                data: localmove,
                
                backgroundColor:[
                  
                  'rgba(200, 255, 100, 0.6)'
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
                text:latest_device_data.datatype3 +' from ' + latest_device_data.device_name,
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
        });
      })

    })
  };
}])


