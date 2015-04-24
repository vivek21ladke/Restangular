'use strict';

/**
 * @ngdoc function
 * @name restangularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the restangularApp
 */
angular.module('restangularApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
