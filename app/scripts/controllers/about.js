'use strict';

/**
 * @ngdoc function
 * @name appTestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the appTestApp
 */
angular.module('appTestApp')
  .controller('AboutCtrl',['restService', function (restService) {
    var user = new User('vittorio');
    console.log(user.name());
    
    restService.getUser().then(function(data){
      console.log(data.data);
    });
  }]);
