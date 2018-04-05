'use strict';

/**
 * @ngdoc function
 * @name appTestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the appTestApp
 */
angular.module('appTestApp')
  .controller('AboutCtrl',['$scope', 'productManager', function ($scope, x) {
    console.log(x.getInitialList());
  }]);
