'use strict';

/**
 * @ngdoc overview
 * @name restangularApp
 * @description
 * # restangularApp
 *
 * Main module of the application.
 */
angular
    .module('restangularApp', [
	'ngAnimate',
	'ngCookies',
	'ngResource',
	'ngRoute'
    ])
    .config(function ($routeProvider) {
	$routeProvider
	    .when('/', {
		templateUrl: 'views/main.html',
		controller: 'MainCtrl'
	    })
	    .when('/about', {
		templateUrl: 'views/about.html',
		controller: 'AboutCtrl'
	    })
	    .when('/contact', {
		templateUrl: 'views/contact.html',
		controller: 'ContactCtrl'
	    })
	    .otherwise({
		redirectTo: '/'
	    });
    })
    .config(['$httpProvider', function($httpProvider) {
	$httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
    }]);
