'use strict';

/**
 * @ngdoc function
 * @name appTestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the appTestApp
 */
angular.module('appTestApp')
  .controller('AboutCtrl',['restService','User','$scope', function (restService, User, $scope) {
    
    restService.getUser().then(function(data){
      console.log(data.data);
      $scope.user = new User(data.data.results[0]);
      console.log($scope.user.getFullName());
    });
  }]);
