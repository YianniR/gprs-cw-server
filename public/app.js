var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider.when('/',{
		controller:'temp_selected_controller',
		templateUrl: 'views/main.html'
	})
	.when('/temp_data/:date',{
		controller: 'tempController',
		templateUrl: 'views/temp_data.html'
	})
	.when('/tempfigure/:id/:date',{
		controller: 'temp_figure_controller',
		templateUrl: 'views/temp_figure.html'
	})
	.when('/register',{
		controller: 'register_device_controller',
		templateUrl: 'views/register_device.html'
	})
	.when('/register_success',{
		templateUrl: 'views/register_success.html'
	})
	.when('/not_registered',{
		controller: 'register_device_controller',
		templateUrl: 'views/unregistered_device.html'
	})
	.when('/about',{
		controller: 'register_device_controller',
		templateUrl: 'views/about.html'
	})
});