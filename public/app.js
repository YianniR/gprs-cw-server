var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider.when('/',{
		controller:'temp_selected_controller',
		templateUrl: 'views/main.html'
	})
	.when('/temp_select_date',{
		//controller:'temp_selected_controller',
		templateUrl: 'views/temp_select_date.html'
	})
	.when('/temp_data/:date',{
		controller: 'tempController',
		templateUrl: 'views/temp_data.html'
	})
	.when('/motion',{
		controller: 'motionController',
		templateUrl: 'views/motion.html'
	})
	.when('/tempfigure/:date',{
		controller: 'temp_figure_controller',
		templateUrl: 'views/temp_figure.html'
	})
	.when('/motionfigure',{
		controller: 'motion_figure_controller',
		templateUrl: 'views/motion_figure.html'
	})
});