'use strict';

/**
 * @ngdoc function
 * @name restangularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the restangularApp
 */
angular.module('restangularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
