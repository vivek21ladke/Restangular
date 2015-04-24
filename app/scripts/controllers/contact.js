'use strict';

/**
 * @ngdoc function
 * @name restangularApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the restangularApp
 */
angular.module('restangularApp')
    .controller('ContactCtrl', function ($scope, $http) {
	$scope.awesomeThings = [
	    'HTML5 Boilerplate',
	    'AngularJS',
	    'Karma'
	];

	$http.get('http://127.0.0.1:8000/api/venue/').
	    success(function(data, status, headers, config) {
		$scope.venue_list = data.venue_list;
		//console.log(data.venue_list, status)
	    }).
	    error(function(data, status, headers, config) {
	    });

    });
