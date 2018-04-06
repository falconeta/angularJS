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
    $scope.bool = true;
    $scope.arrowName = 'keyboard_arrow_down';
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
      if ($scope.bool) {
        $scope.bool = false;
        $scope.arrowName = 'keyboard_arrow_up';
        $scope.orderName = '-firstName';
      } else {
        $scope.arrowName = 'keyboard_arrow_down';
        $scope.bool = true;
        $scope.orderName = 'firstName';
      }
    };
  }]);
