var app=angular.module("MyApp",['ngRoute']);
app.config(function($routeProvider){
	$routeProvider
	
	.when('/',{
		templateUrl:'view/dash.html',
	    controller:'dashcontroller'
	})

})
