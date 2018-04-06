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
    // restService.getUser().then(function(data){
    //   console.log(data.data);
    //   $scope.user = new User(data.data.results[0]);
    //   console.log($scope.user);
    // });
    this.bool = true;
    restService.getUsers().then(function (response) {
      console.log(response.data);
      that.users = [];
      response.data.results.forEach(function (user) {
        that.users.push(new User(user));
      });
      console.log($scope);
    });
    $scope.toggleOrderName = function () {
       if(this.bool){
         this.bool = false; 
         $scope.orderName = '-firstName';
        }else{
          this.bool = true; 
          $scope.orderName = 'firstName';
        } 
    };
  }]);
