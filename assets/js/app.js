'use strict';

var imgbkt = angular.module('imgbkt', ['ngRoute','ui.bootstrap']);

imgbkt.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'templates/dashboard.html',
		controller: 'TodoCtrl'
	})
	.when('/register', {
		templateUrl: 'templates/register.html',
		controller: 'registerCtrl'
	})
	.when('/login', {
		templateUrl: 'templates/login.html',
		controller: 'registerCtrl'
	})
	.otherwise({
		redirectTo: '/',
		caseInsensitiveMatch: true
	});
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
}]);