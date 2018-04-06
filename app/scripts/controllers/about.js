'use strict';

/**
 * @ngdoc function
 * @name appTestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the appTestApp
 */
angular.module('appTestApp')
  .controller('AboutCtrl', ['restService', 'User', '$scope', function (restService, User, $scope) {
    var that = this;
    $scope.arrowName = 'keyboard_arrow_down';
    $scope.arrowStreet = '';
    $scope.orderName = 'firstName';
    restService.getUsers().then(function (response) {
      console.log(response.data);
      that.users = [];
      response.data.results.forEach(function (user) {
        that.users.push(new User(user));
      });
      console.log($scope);
    });
    $scope.toggleOrderName = function () {
      $scope.arrowStreet= '';
      if ($scope.arrowName === 'keyboard_arrow_down') {
        $scope.arrowName = 'keyboard_arrow_up';
        $scope.orderName = '-firstName';
      } else {
        $scope.arrowName = 'keyboard_arrow_down';
        $scope.orderName = 'firstName';
      }
    };
    $scope.toggleOrderStreet = function () {
      $scope.arrowName = '';
      if ($scope.arrowStreet === 'keyboard_arrow_down') {
        $scope.arrowStreet = 'keyboard_arrow_up';
        $scope.orderName = '-street';
      } else {
        $scope.arrowStreet = 'keyboard_arrow_down';
        $scope.orderName = 'street';
      }
    }
  }]);
