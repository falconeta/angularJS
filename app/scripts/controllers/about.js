'use strict';

/**
 * @ngdoc function
 * @name appTestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the appTestApp
 */
angular.module('appTestApp')
  .controller('AboutCtrl',['$scope', function ($scope) {
    $scope.pippo = ['ciao', 'cane' , 'pippo'];
    console.log('vettore' ,$scope);
  }]);
